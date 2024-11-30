# Nanny Services Application

![Nanny-service](https://github.com/nksenechkav/nanny-services-app/blob/main/public/favicon.png?raw=true)

Welcome to the Nanny Services Application! This web app is designed to help families connect with professional nannies. With features like sorting, filtering, and personalized favorite lists, finding the right nanny has never been easier.

## 🚀 [Live Demo](https://nanny-services-app.web.app/)

--------------------------------------------------------------------------------------------------------------------------------------------

## 🌟 Key Features

- **Sorting and Filtering Options**
  Organize and refine the nanny list by:
  - `Alphabetical Order:` A-Z or Z-A.
  - `Price:` Filter nannies based on their service fees.
  - `Popularity:` Sort by rating from lowest to highest.

- **Nanny Profiles**  
  Each nanny has a detailed profile accessible through the Read More button. This allows users to learn about the nanny's skills, experience, and availability.

- **Appointment Form**  
  Users can schedule a meeting with a nanny via the Make an Appointment button, which opens a modal window containing a form to submit their request.

- **User Authentication**  
  Secure user login and registration functionality powered by Firebase Authentication.

- **Favorites List**  
  Registered users can save their preferred nannies to a private Favorites page for easy access later.

--------------------------------------------------------------------------------------------------------------------------------------------

## 🔍 How It Works

### 1. 🎛️ Filter
Use our filtering options to narrow down your search based on sorting by alphabet and filtering by price and popularity to find the best match.

### 2. ❤️ Save
Add your favorite listings to your profile for quick reference later.
`Note:` This feature is available only after completing the registration and login process. If an unregistered user clicks the heart icon, a pop-up notification will appear, informing them that this option requires registration and prompting them to log in or sign up.

### 3. 🔑 Authentication
The authentication process is straightforward and involves filling out a form, submitting the data to the server, and creating a personal user account. This feature grants access to the private Favourites page, where users can add or remove selected nanny profiles to or from their list of favorites.
<table align="center">
  <tr>
    <td align="center" style="width:45%;">
      <img src="https://github.com/nksenechkav/nanny-services-app/blob/main/public/register.png?raw=true" alt="Registration Pop-up" width="300px">
      <p style="font-size:14px; margin-top:5px;">Registration Notification</p>
    </td>
    <td style="width:50%; border: none;"></td> <!-- Добавьте отступ как пробел -->
    <td align="center" style="width:45%;">
      <img src="https://github.com/nksenechkav/nanny-services-app/blob/main/public/login.png?raw=true" alt="Login Pop-up" width="300px">
      <p style="font-size:14px; margin-top:5px;">Login Notification</p>
    </td>
  </tr>
</table>

### 4. 📋 Details
Before making an appointment, you can explore detailed information about each nanny. This allows you to make an informed decision based on your personal preferences.
![Nanny-details](https://github.com/nksenechkav/nanny-services-app/blob/main/public/details.png?raw=true)

### 5. 📅 Make an appointment
Once you’ve found the perfect nanny for your children, proceed with making an appointment through our straightforward process. Submit a meeting request via a user-friendly modal form.
<p align="center"> <img src="https://github.com/nksenechkav/nanny-services-app/blob/main/public/booking.png?raw=true" alt="Booking Modal" width="500px" style="border-radius:10px;"> </p>

--------------------------------------------------------------------------------------------------------------------------------------------

## 🛠 Technologies Used

### ⚛️ React
Modern JavaScript library for building user interfaces.

### 🗂️ Redux
State management for JavaScript apps.

### 🌐 JavaScript (ES6+)
Core language for dynamic functionality.

### 📚 Libraries
- `react-perfect-scrollbar:` Enables smooth and customizable scrolling experiences for better usability and design.
- `react-icons:` Provides a wide range of intuitive icons for enhancing the user interface.
- `react-time-picker:` A lightweight time picker component for selecting time in forms or scheduling features.
- `formik:` Simplifies form handling and validation, ensuring robust and user-friendly forms.
- `react-modal:` A versatile library for creating accessible and customizable modal dialogs.

### 🔥 Firebase
- `Authentication:` Secure user login and registration.
- `Realtime Database:` Store and manage nanny data.
- `Hosting:` Seamless app deployment.

--------------------------------------------------------------------------------------------------------------------------------------------

## 🌐 Pages

<table align="center"> <tr> <td align="center" style="margin:10px;"> <a href="https://nanny-services-app.firebaseapp.com/" target="_blank" style="text-decoration:none;"> <img src="https://github.com/nksenechkav/nanny-services-app/blob/main/public/home.png?raw=true" alt="Home Page" width="200px" height="150px" style="border-radius:10px;"/> <div style="font-size:20px; margin-top:10px; color:#333;"> 🏠 <strong>Home</strong> </div> </a> </td> <td style="width:20%;"></td> <td align="center" style="margin:10px;"> <a href="https://nanny-services-app.firebaseapp.com/catalog" target="_blank" style="text-decoration:none;"> <img src="https://github.com/nksenechkav/nanny-services-app/blob/main/public/catalog.png?raw=true" alt="Nannies Page" width="200px" height="150px" style="border-radius:10px;"/> <div style="font-size:20px; margin-top:10px; color:#333;"> 👩‍👧‍👦 <strong>Nannies</strong> </div> </a> </td> <td style="width:20%;"></td> <td align="center" style="margin:10px;"> <a href="https://nanny-services-app.firebaseapp.com/favourites" target="_blank" style="text-decoration:none;"> <img src="https://github.com/nksenechkav/nanny-services-app/blob/main/public/favourites.png?raw=true" alt="Favorites Page" width="200px" height="150px" style="border-radius:10px;"/> <div style="font-size:20px; margin-top:10px; color:#333;"> ❤️ <strong>Favorites</strong> </div> </a> </td> </tr> </table>

--------------------------------------------------------------------------------------------------------------------------------------------

## 🏁 Getting Started

To run the project locally, follow these steps:

### 1. 📥 Clone the repo:

git clone https://github.com/nksenechkav/campers-rental-app.git

### 2. 📦 Install dependencies:

npm install

### 3. 🚀 Start the development server:

npm start

--------------------------------------------------------------------------------------------------------------------------------------------

## 📝 License

This project is licensed under the MIT License.

