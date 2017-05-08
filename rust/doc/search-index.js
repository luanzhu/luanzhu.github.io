var searchIndex = {};
searchIndex["roadrunner"] = {"doc":"Roadrunner (RR)","items":[[3,"RestClient","roadrunner","RestClient is used to configure request.",null,null],[3,"Content","","Holds the body content of a response.",null,null],[3,"Response","","Holds response received from server after a request is executed.",null,null],[4,"Error","","The error that can happen during a request.",null,null],[13,"UrlParse","","Indicate an url parsing error.",0,null],[13,"UriParse","","Also indicate an url parsing error.",0,null],[13,"Hyper","","Error reported by hyper.",0,null],[13,"CharsetDecode","","Response content cannot be decoded successfully.",0,null],[13,"Io","","IO error.",0,null],[13,"JsonError","","Error reported by serde_json.",0,null],[5,"request_for_response","","This function provides a low level API interface that one can use if the high level API is not sufficient.",null,{"inputs":[{"name":"request"},{"name":"core"}],"output":{"name":"result"}}],[17,"DEFAULT_USER_AGENT","","Default user agent will be sent with request if user agent is not specified.",null,null],[17,"CHROME_USER_AGENT","","The user agent is used when `user_agent_chrome` is called.",null,null],[17,"FIREFOX_USER_AGENT","","The user agent is used when `user_agent_firefox` is called.`",null,null],[8,"RestClientMethods","","Provides a high level API that one can use to configure and execute a request.",null,null],[10,"cookie","","Set cookie for request, can be called multiple times to set multiple cookies.",1,{"inputs":[{"name":"self"},{"name":"k"},{"name":"v"}],"output":{"name":"self"}}],[10,"authorization_basic","","Set username and password for basic authentication header.",1,{"inputs":[{"name":"self"},{"name":"string"},{"name":"string"}],"output":{"name":"self"}}],[10,"authorization_bearer","","Set oauth token for oauth authentication.",1,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"self"}}],[10,"authorization_string","","Set a custom authentication header.",1,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"self"}}],[10,"accept","","Set Accept header for the request. If none is specified, the default *application/json* will be used.",1,{"inputs":[{"name":"self"},{"name":"qualityitem"}],"output":{"name":"self"}}],[10,"header_set_raw","","Set a header with a raw string, existing value of the same header will be overwritten.",1,{"inputs":[{"name":"self"},{"name":"k"},{"name":"vec"}],"output":{"name":"self"}}],[10,"header_append_raw","","Append a header with a raw string, existing value of the same header will NOT be overwritten.",1,{"inputs":[{"name":"self"},{"name":"k"},{"name":"string"}],"output":{"name":"self"}}],[10,"query_param","","Append url query parameters.",1,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"}],"output":{"name":"self"}}],[10,"form_field","","Set form fields for the request. This method can be called multiple times.  All fields will be encoded and send as request body.",1,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"}],"output":{"name":"self"}}],[10,"json_body_str","","Set request body as a json string.",1,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"self"}}],[10,"json_body_typed","","Parameter typed_value will be serialized into a json string and sent as the request body.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"self"}}],[10,"user_agent","","Set the user agent header for request.  If none is specified, the default string `DEFAULT_USER_AGENT` will be used.",1,{"inputs":[{"name":"self"},{"name":"k"}],"output":{"name":"self"}}],[10,"user_agent_firefox","","Set the user agent as firefox.  This may be needed when a server only accepts requests from well-known user agents.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"user_agent_chrome","","Set the user agent as chrome.",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"execute_on","","Finish setting up the request, and kick off request execution on a `tokio_core::reactor::Core`.",1,{"inputs":[{"name":"self"},{"name":"core"}],"output":{"name":"result"}}],[11,"get","","Initialize a RestClient for a GET request.",2,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"delete","","Initialize a RestClient for a DELETE request.",2,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"post","","Initialize a RestClient for a POST request.",2,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"put","","Initialize a RestClient for a PUT request.",2,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"patch","","Initialize a RestClient for a PATCH request.",2,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"options","","Initialize a RestClient for a OPTIONS request.",2,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_ref_string","","Get the raw body content as a `&str`.",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"as_value","","Get the body content as a `serde_json::value::Value`.",3,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"as_typed","","Get the body content as a strongly typed struct.",3,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"status","","Get the response status code.",4,{"inputs":[{"name":"self"}],"output":{"name":"statuscode"}}],[11,"content","","Get the response body content.",4,{"inputs":[{"name":"self"}],"output":{"name":"content"}}],[11,"headers","","Get response headers.",4,{"inputs":[{"name":"self"}],"output":{"name":"headers"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"from","","",0,{"inputs":[{"name":"parseerror"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"urierror"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}]],"paths":[[4,"Error"],[8,"RestClientMethods"],[3,"RestClient"],[3,"Content"],[3,"Response"]]};
initSearch(searchIndex);