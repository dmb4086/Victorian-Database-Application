# Exception Handling 

## Data Layer

To ensure a production ready application, errors ```caught``` in the data layer will be re-thrown with a message that would readable to an average non-technical user. This way we can obfuscate the internal application errors pertaining to the data layer. Every method will return a Promise and if that promise is not returned it will return an error, an industry standard way handle these promise rejections is to include a `try/catch block` (in an async method) in the ```business layer``` 

> Example code handling exceptions thrown by a read operation

```
const getBook = (id, callback) => {
	data.Book.read(id)
		.then(book => callback(undefined, book))
		.catch(error => callback(error))
}
```



## Business Layer

Errors to the business layer will primarily be handled by `Express.js` as the errors will be passed through HTTP Status codes.

`Express.js` is ideal as it automatically handles errors by wrapping all of its synchronous functions in a try/catch block avoiding the need of handling such errors manually. The only scenario where I will have to be mindful of errors will be in the case of async functions, in which case I will catch the errors and pass it Express.  

> Example code handling an error in the data layer, passing it to Express to return as a response with code 502:

```
app.get("/book/:id", (req, res, next) => {
	getBook(req.params.id, (err, book) => {
		if(err){
			next(new Error("Error retrieving book"));
		}else{
			res.send(book);
		}
	})
})
```


## Presentation Layer

Like the `data-layer` errors thrown in this layer will be caught and displayed in a way that is readable to the average user. 

> Example code handling an error in a `fetch` request, triggering the error dialog:

```
const Book = ({ id }) => {
	const [data, setData] = useState(null);
	const dispatch = useDispatch(); 
		useEffect(async () => {
		try{
			const response = await fetch("/api/book/" + id);
			if(!response.ok){
				throw new Error("Unable to retrieve Book");
			}
			
			const data = await response.json();
			setData(data);
		}catch(err){
			dispatch(setError(err.message));
		}
	}, [])
}
```








