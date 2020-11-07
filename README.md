# microfrontend-sample

This project was developed to study how do create microfrontends using **single-spa**.


## Project Structure

- microfrontend-root-config
- - This is the root container that will import the applications
- microfrontend-appbar
- - This is the appbar/navigation system of the application
- microfrontend-home
- - This is the Home Page of the application



## Running applications in Standalone mode

You can run both the **home** and the **appbar** applications, using the standalone method, by going into their folders, and running

```bash
yarn start:standalone
```

## Running in integrated mode
To simulate the real deal, you have to start your **root-config**, and also start each application in it's own webpack-dev-server

```bash
cd microfrontend-root-config
yarn start
cd ../microfrontend-appbar
yarn start --port 8080
cd ../microfrontend-home
yarn start --port 8085
```

Now you can access the application at http://localhost:9000
