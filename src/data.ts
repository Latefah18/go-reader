




export interface IPost {
	id: string;
    name:String;
	description: string;
	image: string;

}




export const posts: IPost[] = [
	{
		id: '1',
	     name: 'momo',
	
		description: '#flower #flowers',
		image:'https://images.unsplash.com/photo-1658620258823-9d78c7b14f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		
	},
	/// post with my dog image

    {
		id: '2',
	name: 'momo',
	
		description: '#flower #flowers',
		image:'https://images.unsplash.com/photo-1658620258823-9d78c7b14f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		
	},


];

