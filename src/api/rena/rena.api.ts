import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import signale from "signale";

export const url = {
    rena: process.env.ENVIRONMENT === 'development' ? process.env.RENA_SERVER_DEV_URL : process.env.RENA_SERVER_URL
};

class RenaApi
{
	constructor()
	{
		this.request = axios.create({
			baseURL: url.rena,
			withCredentials: true
		});
	}

	async get(route: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    {
        try 
        {
            const result = await this.request.get(route, config);

            return result;
        } 
        catch (error: any) 
        {
            const e = error as AxiosError;
            signale.log(e.response?.data);

            return error.response as AxiosResponse<any, any>;
        }
    }

    async post(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    {
        try 
		{
			const result = await this.request.post(route, data, config);

			return result;
		} 
		catch (error: any) 
		{
            signale.log(error.response?.data.message);

            return error.response as AxiosResponse<any, any>;
		}
    }

    async patch(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>> 
    {
        try 
		{
			const result = await this.request.patch(route, data, config);

			return result;
		} 
		catch (error: any) 
		{
			signale.error(error.response?.data.message);

			return error.response as AxiosResponse<any, any>;
		}
    }

    async put(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>> 
    {
        try 
		{
			const result = await this.request.put(route, data, config);

			return result;
		} 
		catch (error: any) 
		{
			signale.error(error.response?.data.message);

			return error.response as AxiosResponse<any, any>;
		}
    }

    async delete(route: string, config: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    {
        try 
		{
			const result = await this.request.delete(route, config);

			return result;
		} 
		catch (error: any) 
		{
			signale.error(error.response?.data.message);

			return error.response as AxiosResponse<any, any>;
		}
    }

	private request;
}

export const rena = new RenaApi();
