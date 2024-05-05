{
  interface User {
    username: string;
    email: string;
  }

  interface Admin extends User {
    adminLevel: number;
  }

  function isAdmin(user: User | Admin): user is Admin {
    return (user as Admin).adminLevel !== undefined;
  }

  // Example usage
  function performAction(user: User | Admin) {
    if (isAdmin(user)) {
      console.log(
        `${user.username} is an admin with level ${user.adminLevel}.`
      );
      // Admin-specific actions
    } else {
      console.log(`${user.username} is a regular user.`);
      // Regular user actions
    }
  }

  // Example data
  const regularUser: User = {
    username: "john_doe",
    email: "john@example.com",
  };

  const adminUser: Admin = {
    username: "admin_user",
    email: "admin@example.com",
    adminLevel: 5,
  };

  performAction(regularUser); // Output: john_doe is a regular user.
  performAction(adminUser); // Output: admin_user is an admin with level 5.

  {
    interface User {
      username: string;
      email: string;
    }

    interface Admin extends User {
      adminLevel: number;
    }

    // Type guard function using 'in' keyword
    function isAdmin(user: User | Admin): user is Admin {
      return "adminLevel" in user;
    }

    // Example usage
    function performAction(user: User | Admin) {
      if (isAdmin(user)) {
        console.log(
          `${user.username} is an admin with level ${user.adminLevel}.`
        );
        // Admin-specific actions
      } else {
        console.log(`${user.username} is a regular user.`);
        // Regular user actions
      }
    }

    // Example data
    const regularUser: User = {
      username: "john_doe",
      email: "john@example.com",
    };

    const adminUser: Admin = {
      username: "admin_user",
      email: "admin@example.com",
      adminLevel: 5,
    };

    performAction(regularUser); // Output: john_doe is a regular user.
    performAction(adminUser); // Output: admin_user is an admin with level 5.
  }
}
