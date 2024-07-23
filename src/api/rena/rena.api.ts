import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const url = {
    rena: process.env.RENA_SERVER_URL
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
            if (error.response?.status == 401)
            {
                console.log('Unauthorized');
            }

            return error.response as AxiosResponse<any, any>;
        }
    }

    async post(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    {
        const result = await this.request.post(route, data, config);

        if (result.status == 401)
        {
            console.log('Unauthorized');
        }

        return result;
    }

    async patch(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>> 
    {
        const result = await this.request.patch(route, data, config);

        if (result.status == 401)
        {
            console.log('Unauthorized');
        }

        return result;
    }

    async put(route: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>> 
    {
        const result = await this.request.put(route, data, config);

        if (result.status == 401)
        {
            console.log('Unauthorized');
        }

        return result;
    }

    async delete(route: string, config: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    {
        const result = await this.request.delete(route, config);

        if (result.status == 401)
        {
            console.log('Unauthorized');
        }

        return result;
    }

	private request;
}

export const rena = new RenaApi();
