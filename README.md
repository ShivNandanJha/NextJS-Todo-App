# TodoIt - A Simple Todo App
![web-screenshot-26-09-2023 (1)](https://github.com/ShivNandanJha/NextJS-Todo-App/assets/115362063/0c46d2f5-d47e-4f00-ac5f-c8e053a6c4ad)


TodoIt is a straightforward and efficient todo application built using Next.js, Firebase Storage, and Firebase Authentication. This web application allows users to easily manage their work and schedules in a user-friendly and organized manner. With the added security of authentication, you can be confident that your todo list is private and accessible only to you.

## Features

- **User Authentication**: To use TodoIt, users must create an account or log in with their existing credentials. This ensures the security and privacy of your todos.

- **Add and Edit Todos**: Easily create new tasks and edit existing ones to stay on top of your work and schedules.

- **Check Off Completed Tasks**: Mark tasks as completed to keep track of your progress and maintain a clear todo list.

- **Responsive Design**: TodoIt is designed to work seamlessly on both desktop and mobile devices, ensuring you can manage your todos wherever you are.

## Getting Started

To run TodoIt locally for development or testing purposes, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/todoit.git
   ```

2. Navigate to the project directory:

   ```
   cd todoit
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore services in your Firebase project.
   - Configure Firebase by adding your Firebase project credentials to the `firebaseConfig` object in the `firebase.js` file located in the `utils` directory.

5. Start the development server:

   ```
   npm run dev
   ```

6. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use TodoIt locally.

## Deployment

To deploy TodoIt to a production environment, follow these steps:

1. Set up a production Firebase project and configure it as described in the "Getting Started" section.

2. Build the production-ready version of the app:

   ```
   npm run build
   ```

3. Deploy the app to your hosting provider or Firebase Hosting:

   - For Firebase Hosting, you can use the Firebase CLI to deploy:

     ```
     npm install -g firebase-tools
     firebase login
     firebase init
     firebase deploy
     ```

## Contributing

We welcome contributions to make TodoIt even better. If you'd like to contribute

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the Next.js and Firebase communities for providing excellent tools and resources.

## Contact

If you have any questions, issues, or suggestions, please feel free to contact us at [mail](mailto:shivjha1226@gmail.com).

Happy task management with TodoIt! 🚀
