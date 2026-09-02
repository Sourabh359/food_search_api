# 🍴 Food Search Application

A modern and responsive **Food Search Application** built with **Next.js, TypeScript, and Tailwind CSS**.
Users can search for meals and view detailed information including ingredients, measurements, images, and other recipe details.

The application uses **TheMealDB API** to fetch meal data.

## 🚀 Live Demo

🔗 **Live Website:** [view live demo](https://food-search-api-alpha.vercel.app)

## ✨ Features

* 🔍 Search meals by name
* 🍽️ Display meal details
* 🖼️ Dynamic meal images
* 🧂 Display ingredients and their measurements
* 📱 Fully responsive design
* ⚡ Fast and optimized with Next.js
* 🔄 Loading state support
* ❌ Error handling for failed API requests
* 🔗 Dynamic routes for meal pages
* 🎨 Modern UI using Tailwind CSS
* 📦 Type-safe development using TypeScript
* 🚀 Deployed on Vercel

---

## 🛠️ Tech Stack

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

### API

* **TheMealDB API**

### Tools

* Git
* GitHub
* VS Code
* Vercel

## 📁 Project Structure

FOOD-SEARCH-API
│
├── app/
│   ├── components/
│   │   ├── SearchFood.tsx
│   │   ├── FoodItem.tsx
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── about
│   │   └── page.tsx
│   │
│   ├── [slug]/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🔎 How It Works

The basic flow of the application is:

```text
User enters meal name
        ↓
Search Form
        ↓
Meal name is encoded
        ↓
TheMealDB API request
        ↓
API returns meal data
        ↓
TypeScript validates the data structure
        ↓
Meal information is displayed
```

For example:

```text
User Input:
pizza

API Request:
...?food=pizza

Result:
Meal information
```

---

## 🧩 TypeScript

Meal API response ke liye TypeScript interface use ki gayi hai.

Example:

```ts
export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
}
```

Optional properties (`?`) un fields ke liye useful hain jo API response mein available na bhi ho sakti hain.

---

## 🔗 URL Encoding

Search query ko safely URL mein use karne ke liye:

```ts
encodeURIComponent(food.trim())
```

use kiya gaya hai.

Example:

```text
Chicken Biryani
```

ko URL mein safely pass kiya ja sakta hai.

---

## 📱 Responsive Design

Application ko different screen sizes ke liye responsive banaya gaya hai:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

Responsive styling ke liye **Tailwind CSS** ka use kiya gaya hai.

---

## 🚀 Deployment

This project can be deployed easily using **Vercel**.

### Build the project

```bash
npm run build
```

### Deploy

1. Project ko GitHub par push karo.
2. Vercel mein GitHub repository import karo.
3. `NEXT_PUBLIC_SEARCHAPI` environment variable add karo.
4. **Deploy** button par click karo.

After deployment, Vercel ek live URL provide karega:

```text
https://food-search-api-alpha.vercel.app/
```

---

## 📸 Screenshots

### Home Page

![Home Page](../screenshots/home.png)

### Search Results

![Search Results](../screenshots/search-results.png)

### Meal Details

![Meal Details](../screenshots/meal.details.png)


## 📚 What I Learned

While building this project, I practiced:

* Next.js App Router
* React Client Components
* TypeScript interfaces
* `useState`
* `useEffect`
* API fetching
* Environment variables
* `process.env.NEXT_PUBLIC_*`
* Dynamic routes
* URL encoding with `encodeURIComponent()`
* Next.js `Image` component
* Loading and error handling
* Responsive UI with Tailwind CSS
* Git & GitHub
* Vercel deployment

---

## 👨‍💻 Author

**Sourabh**

GitHub: [GitHub profile](https://github.com/Sourabh359)

---

## 📄 License

This project is created for learning and portfolio purposes.

Meal data is provided by **TheMealDB API**.
