# Transactions Dashboard

Follow these steps to run the project:


1. **Clone the Repository**
   Clone the project repository to your local machine. Replace `<url>` with the URL of your repository.
   ```
   git clone <url>
   ```

2. **Navigate to the Project Directory**
   Change your current directory to the project's directory.
   ```
   cd <repository-name>
   ```
3. **Navigate to client and server directories**
    ```
    cd client
    cd server
    ```

4. **Install Dependencies**
   Install the project dependencies for both client and server using `npm`.
   ```
   npm install
   ```

5. **Setup environment variables**
   Create a `.env` file and add your environment variables.

    - client
   ```
   VITE_BACKEND_URL = <your_backend_url>
   ```
   - server
   
    ```
    MONGO_URI = <mongodb_uri>
    PORT = <port_number>
    CLIENT_URL = <your_client_url>
    ```


6. **Run the Project**
   Finally, run the project.
   ```
   npm run start
   ```



That's it! Your Transaction Dashboard project should now be running.


