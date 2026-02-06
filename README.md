# Blood Donor Management System

### [Live Link](https://blood-donor-system-client.vercel.app) | [Server Side Repository](https://github.com/inzamulhaque/blood-donor-system-server) | [API Documentation](https://documenter.getpostman.com/view/49556725/2sB3dMxr7U)

A modern, responsive web application for managing blood donation programs. This platform connects blood donors with people in need, featuring role-based access control and automated donor availability management.

## Technology Used

- React
- TypeScript
- Ant Design
- Framer Motion
- DayJS
- React Router Dom

## Features

### For Donors

- Profile Management: Add and update blood group, address, and contact information.
- Donation Tracking: Record donation dates and view complete donation history.
- Automatic Availability: System automatically marks donors as unavailable for 90 days after donation.
- Dual Role: Search for other donors when you need blood.

### For Blood Seekers (Finders)

- Search: Find donors by blood group.
- Easy Registration: Convert to donor status anytime
- Real-time Availability: See which donors are currently available.

### For Admins

- User Management: View all users, donors, and finders.
- Access Control: Block/unblock users as needed.
- Donor Registration: Add new donors to the system.
- Advanced Queries: Search and filter donors with multiple criteria.

### For Super Admins

- Role Assignment: Promote donors to admin status.
- Admin Management: Block/unblock admins and revoke admin privileges.
- Full Control: Access to all admin features.

### Security & Authentication

- Email Verification: OTP-based email verification during signup.
- Secure Authentication: JWT-based authentication system.
- Role-based Access: Different dashboards and permissions for each user type.

## How to run the application locally?

If you need to run this application locally so follow this process.

Firstly clone server side repository from GitHub. using this code:

`git clone git@github.com:inzamulhaque/blood-donor-system-server.git`

Or

`git clone https://github.com/inzamulhaque/blood-donor-system-server.git`

Then clone client side repository GitHub. using this code:

`git clone git@github.com:inzamulhaque/blood-donor-system-client.git`

Or

`git clone https://github.com/inzamulhaque/blood-donor-system-client.git`

When applications are cloned successfully applications open with VSCode or author text editor. Open the terminal or command prompt at this project. Install all necessary dependencies.  
For installing all dependencies run this command:

`npm install`

run application in a development environment:  
`npm run dev`

for build production level application please run the command  
`npm run build`

### Thank you
