## Getting Started

1. Clone this repository:
   `git clone https://github.com/adev05/avito-client`

2. Navigate to the project directory:
   `cd avito-client`

3. Build the Docker image:
   `docker build -t avito-client .`

4. Run the Docker container:
   `docker run -p 3000:3000 -e SERVER_URL=http://your-server-url avito-client`
