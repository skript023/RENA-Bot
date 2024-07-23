interface ResponseServer<T>
{
	message: string;
	success: boolean;
	data: T | T[];
}
