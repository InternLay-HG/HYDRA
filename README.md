Unified Student Collaboration and Anonymous Confession Platform - SRS

### 1. Introduction


1.1 Purpose
The purpose of this project is to create a Unified Student Collaboration Platform designed for academic institutions. This platform will provide students and educators with a centralized space to share academic resources, collaborate, and anonymously express thoughts, promoting better communication and a supportive environment.




1.2 Scope
The platform will be a web-based application enabling users to:
Share and organize academic resources like notes, assignments, and reminders.
Communicate seamlessly through chat features, group discussions, and announcements.
Post confessions or personal thoughts anonymously, fostering an open and supportive community.



1.3 Audience
This document is intended for developers, designers, project managers, and stakeholders involved in the platform's development and maintenance.

### 2. Overall Description


2.1 Product Perspective
The platform will serve as a central hub for student collaboration and resource sharing, offering features typically found in social platforms, group chat applications, and anonymous forums.



2.2 Product Functions
Academic Resource Hub: A dedicated section for uploading, organizing, and accessing academic materials.
Real-Time Chat and Announcements: Individual and group chat capabilities for peer communication and official updates.
Anonymous Confession Page: An anonymous section where students can submit posts under moderation.
User Authentication: A robust authentication mechanism to ensure secure and verified access.



2.3 User Characteristics
The primary users are:
Students: Seeking resources, collaboration, and a place for open expression.
Educators: Sharing resources and managing student collaborations and announcements.



2.4 Constraints
Privacy: Strong privacy and data protection measures for user confidentiality.
Scalability: Support for a growing number of users and data.
Accessibility: Compatible with various devices and browsers.


### 3. Functional Requirements


3.1 Academic Resource Hub
Upload & Organize Content: Users can upload notes, assignments, and set reminders with custom notifications.
Download & Share: Users can download and share files within groups or with individual users.
Resource Categorization: Files can be tagged and categorized by subject or topic.



3.2 Real-Time Chat and Announcements
Individual and Group Chat: Users can communicate in real-time, one-on-one, or within groups.
Announcements Section: A separate section where educators can post updates and announcements.
Notifications: Users receive alerts for new messages, mentions, or announcements.



3.3 Anonymous Confessions
Anonymous Posting: Users can post confessions without revealing their identities.
Moderation Tools: Machine Learning-based moderation to detect inappropriate or harmful language.
Community Guidelines: Users are prompted to review guidelines before posting.



3.4 User Authentication
Account Creation and Login: Secure login system with email verification.
Role-based Access: Admin, educator, and student roles, each with specific permissions.
Password Recovery: Password reset functionality for users.


### 4. Tech Stack


4.1 Frontend
React: JavaScript framework for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.



4.2 Backend
Node.js and Express: Server-side JavaScript and framework for handling requests and routing.
MongoDB: NoSQL database to store user data, resources, chat logs, and confessions.



4.3 Machine Learning
Hugging Face Transformers: For implementing text moderation and natural language processing in confessions.



4.4 Authentication
Firebase or Auth0: To handle user login, role-based access, and secure sessions.

### 5. Appendices


5.1 Glossary
ML (Machine Learning): Technology that enables systems to learn and make decisions based on data.
WCAG: Web Content Accessibility Guidelines for making web content accessible to people with disabilities.



5.2 References
Slack and Discord: For examples of real-time chat and resource-sharing platforms.


### 6. Figma File Link
-> https://www.figma.com/design/KzpsaQaecZHYYtEN83IwVT/Campus-Cove?node-id=0-1&t=K2S98FTAHSFspoGr-1


### 7. Team Members and Domains
->Ujjwal Bajpayee(Team Leader) - ML/AI & Web Development

->Himanshu Gupta - UI/UX

->Ayush Singhal - Web Development

->Bhumika Tiwari - Web Development

->Tanmay Agarwal - ML/AI
