import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export abstract class ConfigServer {
	constructor() {
		const nodeNameEnv = this.createPathEnv(this.nodeEnv);
		dotenv.config({ path: nodeNameEnv });
	}

	public getEnviroment(key: string): string | undefined {
		//la variable key sera dinamica por eso esta en corchetes
		return process.env[key]; // process.env['PORT]
	}

	public getNumberEnv(key: string): number {
		return Number(this.getEnviroment(key));
	}

	// Este getter te obliga a retornar algo a comparacion de las demas Fn
	public get nodeEnv(): string {
		//lee la variable de entorno
		return this.getEnviroment('NODE_ENV')?.trim() || '';
	}

	public createPathEnv(path: string): string {
		const arrayEnv: Array<string> = ['env'];

		if (path.length > 0) {
			const stringToArray = path.split('.');
			arrayEnv.unshift(...stringToArray);
		}

		return '.' + arrayEnv.join('.'); // ['production,', 'env']  => .production.env
	}

	//el get indica que se debe implementar si o si
	public get typeORMConfig(): ConnectionOptions {
		return {
			type: 'mysql',
			host: this.getEnviroment('DB_HOST'),
			port: this.getNumberEnv('DB_PORT'),
			username: this.getEnviroment('DB_USER'),
			password: this.getEnviroment('DB_PASSWORD'),
			database: this.getEnviroment('DB_DATABASE'),
			entities: [__dirname + '/../**/*.entity{.ts,.js}'],
			migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
			synchronize: true,
			logging: false,
			namingStrategy: new SnakeNamingStrategy(), //userName => user_name
		};
	}
}
