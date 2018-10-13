pros for redux:
	simple debuging (redux devtools)
	time travel (can click on any past action and jump to that point in the code to replay the action selected)
	redux superts middleware(fancy word for function that runs every time an action is called)

negative for redux:

inportent things for redux:
	Redux’s connect function is a higher-order component (or HoC for short). It wraps another component and passes props into it.






inportent things for context:
	The React.createContext function which creates the context
	The Provider (returned by createContext) which establishes the “electrical bus” running through a component tree
	The Consumer (also returned by createContext) which taps into the “electrical bus” to extract the data
	The context Consumer, by contrast, expects the child component to be a function. It then calls that function at render time, passing in the value that it got from the Provider somewhere above it 

pros for context:
	really good for smaller apps just passing data around
	Remember there’s 3 pieces: the context itself (created with React.createContext), and the two components that talk to it (Provider and Consumer).(provider and consumer are a pair)
	context holds no state(you have to pass a value to the provider and its exact value gets passed down to any consumers that know how to look for it (Consumers that are bound to the same context as the Provider))
	context api is farliy flexable (Since creating a context gives us two components to work with (Provider and Consumer), we’re free to use them however we want. Here are a couple ideas.)

negative for context:
	not as easy when it comes to debuging(does not have a chrome extention to help with debug)
	does not have all the atomatic proformence inprovments or customization






should you you redux or context:

	it all depends on things like:
		how big you app is.
		how many people are working on it(are you working by your self)
		how expereanced are you and your team with functional concepts(the ones Redux relies upon, like immutability and pure functions)

the best way to choose what to use is think of it like this
		approach is to look at this wonderful array of choices like a toolbox. It’s like the choice between using a screwdriver or an impact driver. For 80% of the jobs, the impact driver is gonna put the screw in faster 				than the screwdriver. But for that other 20%, the screwdriver is actually the better choice – maybe because the space is tight, or the item is delicate. When I got an impact driver I didn’t immediately throw away my 			screwdriver, or even my non-impact drill. The impact driver didn’t replace them, it simply gave me another option. Another way to solve a problem.

things to say:
	provider acceptes only one value(just a single value but remember that the value can be anythind in practace if you want to pass mutuple values you just need to make it a object and pass down the object)
	The Provider is very similar to React-Redux’s Provider. It accepts a value prop which can be whatever you want (it could even be a Redux store… but that’d be silly).
	Turn the Consumer into a Higher-Order Component(Not fond of the idea of adding the UserContext.Consumer around every place that needs it? Well, it’s your code! You can do what you want. You’re an adult.)
	context does not replace redux any more then react replaced anguler 
	sometimes redux is just more then you need 