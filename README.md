<div align="center">
<h3 align="center">A Social Media Application</h3>
</div>

## <a name="tech-stack"> Tech Stack</a>

- React.js
- Appwrite
- React Query
- TypeScript
- Shadcn
- Tailwind CSS

## <a name="features"> Features</a>

**Authentication System**: A robust authentication system ensuring security and user privacy

**Explore Page**: Homepage for users to explore posts, with a featured section for top creators

**Like and Save Functionality**: Enable users to like and save posts, with dedicated pages for managing liked and saved content

**Detailed Post Page**: A detailed post page displaying content and related posts for an immersive user experience

**Profile Page**: A user profile page showcasing liked posts and providing options to edit the profile

**Browse Other Users**: Allow users to browse and explore other users' profiles and posts

**Create Post Page**: Implement a user-friendly create post page with effortless file management, storage, and drag-drop feature

**Edit Post Functionality**: Provide users with the ability to edit the content of their posts at any time

**Responsive UI with Bottom Bar**: A responsive UI with a bottom bar, enhancing the mobile app feel for seamless navigation

**React Query Integration**: Incorporate the React Query (Tanstack Query) data fetching library for, Auto caching to enhance performance, Parallel queries for efficient data retrieval, First-class Mutations, etc

**Backend as a Service (BaaS) - Appwrite**: Utilize Appwrite as a Backend as a Service solution for streamlined backend development, offering features like authentication, database, file storage,and many more, including code architecture and reusability 

<img width="1440" alt="Screenshot 2024-03-18 at 12 23 23 AM" src="https://github.com/AgarwalAryan/Social_Media_App/assets/161757715/b39c232d-59f1-4184-900d-8d1f96419d3b">

<img width="1440" alt="Screenshot 2024-03-18 at 12 23 23 AM" src="https://github.com/AgarwalAryan/Social_Media_App/assets/161757715/8fc9518b-ec35-4ee1-a8c1-dc247b3deec2">

<img width="1440" alt="Screenshot 2024-03-18 at 12 23 23 AM" src="https://github.com/AgarwalAryan/Social_Media_App/assets/161757715/f351e41c-d1a7-4995-ab6f-d4cd9f6f3621">

<img width="1440" alt="Screenshot 2024-03-18 at 12 23 23 AM" src="https://github.com/AgarwalAryan/Social_Media_App/assets/161757715/58cdf84f-891d-4eda-84fd-06200d898f5e">



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
