// mockData.js
//Products List
const productsall = [
    {
      id: 1,
      name: "Poco M6 Pro 5G Mobile",
      ratings: 4.5,
      price: 13000,
      discount: 0,
      stockQuantity: 100,
      image: "https://m.media-amazon.com/images/I/51dGqSFNrDL._SX679_.jpg",
    },
    {
      id: 2,
      name: "Ramayana and Mahabharata",
      ratings: 4.8,
      price: 712,
      discount: 50,
      stockQuantity: 50,
      image: "https://m.media-amazon.com/images/I/81U6rJG6ndL._SX679_.jpg",
    },
    {
      id: 3,
      name: "Sand Disk",
      ratings: 4.2,
      price: 395,
      discount: 15,
      stockQuantity: 75,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhTIlDig_YxTmOPXtRC2WY4ApVxr5xwOA8ImdHxZJt6llJqCJoZLeqAHHWBnIOXALDUceXRDfoekr-W-i2DsdkjM1-wmAPo340OcIj4q8iuHsEEGHIy99n&usqp=CAE",
    },
    {
      id: 4,
      name: "Dell Inspiron Laptop",
      ratings: 4.5,
      price: 25990,
      discount: 2990,
      stockQuantity: 100,
      image:
        "https://m.media-amazon.com/images/I/41nAAZgq5yL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 5,
      name: "VW TV",
      ratings: 3.8,
      price: 8000,
      discount: 5000,
      stockQuantity: 50,
      image:
        "https://m.media-amazon.com/images/I/41IhYmbTcJL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      id: 6,
      name: "Wireless Doorbel",
      ratings: 4.2,
      price: 750,
      discount: 15,
      stockQuantity: 75,
      image:
        "https://m.media-amazon.com/images/I/41IhYmbTcJL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      id: 7,
      name: "The Japanese Happy Life",
      ratings: 4.8,
      price: 499,
      discount: 10,
      stockQuantity: 100,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1uoPlYkUGe-iYnE9zaHDKrymFMDw1X6xRtPmaCGm4J4a3DdfV4cLwu7FIloxZSHSv38Lb_v3ZkODMcsLWLGSdzmnSajm7vp8K53ZJ4aX-8R3K4PFBRsU4&usqp=CAE",
    },
    {
      id: 8,
      name: "HP Laptop",
      ratings: 3.8,
      price: 19990,
      discount: 5,
      stockQuantity: 50,
      image:
        "https://m.media-amazon.com/images/I/41oOa1gn5FL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 9,
      name: "Apple Mobile iphone 13",
      ratings: 4.2,
      price: 70000,
      discount: 1000,
      stockQuantity: 75,
      image:
        "https://m.media-amazon.com/images/I/315vs3rLEZL._SY445_SX342_QL70_FMwebp_.jpg",
    },
    {
      id: 10,
      name: "Acer TV",
      ratings: 4.5,
      price: 12000,
      discount: 10,
      stockQuantity: 100,
      image:
        "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9c6d000f-4e1a-495e-8431-cdcf47a9b3dc._CR0,299,4167,2181_SX507_QL70_.jpg",
    },
    {
      id: 11,
      name: "Saree",
      ratings: 3.8,
      price: 199,
      discount: 50,
      stockQuantity: 50,
      image: "https://m.media-amazon.com/images/I/61fy4Tu7D1L._SY879_.jpg",
    },
    {
      id: 12,
      name: "Apple Macbook Laptop",
      ratings: 4.2,
      price: 32500,
      discount: 15000,
      stockQuantity: 75,
      image: "https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg",
    },
    {
      id: 13,
      name: "Borosel cheff",
      ratings: 4.5,
      price: 2990,
      discount: 1000,
      stockQuantity: 100,
      image:
        "https://m.media-amazon.com/images/I/41l2NsN0dJL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 14,
      name: "Noice buds",
      ratings: 3.8,
      price: 1999,
      discount: 500,
      stockQuantity: 50,
      image:
        "https://m.media-amazon.com/images/I/41xf1dU-GQL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 15,
      name: "Train Toy",
      ratings: 4.9,
      price: 350,
      discount: 15,
      stockQuantity: 75,
      image:
        "https://m.media-amazon.com/images/I/41y-DdWEOjL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      id: 16,
      name: "Mi 80 TV",
      ratings: 4.5,
      price: 25990,
      discount: 1000,
      stockQuantity: 100,
      image:
        "https://m.media-amazon.com/images/I/41tja-It9fL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      id: 17,
      name: "Digital Camera",
      ratings: 3.8,
      price: 19990,
      discount: 5000,
      stockQuantity: 50,
      image:
        "https://m.media-amazon.com/images/I/41ZdqEcZsML._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 18,
      name: "Childrens Books",
      ratings: 4.2,
      price: 50,
      discount: 15,
      stockQuantity: 75,
      image:
        "https://rukminim2.flixcart.com/image/416/416/kh3qkcw0-0/poster/e/z/v/large-abc-book-chart-pre-school-picture-book-lovely-abc-alphabet-original-imafx6zhxppjab2h.jpeg?q=70&crop=false",
    },
    {
      id: 19,
      name: "Dove",
      ratings: 3.5,
      price: 299,
      discount: 10,
      stockQuantity: 100,
      image:
        "https://m.media-amazon.com/images/I/51ujh-o3AdL._SX522_PIbundle-3,TopRight,0,0_AA522SH20_.jpg",
    },
    {
      id: 20,
      name: "Honor Laptop",
      ratings: 3.8,
      price: 19.99,
      discount: 5,
      stockQuantity: 50,
      image:
        "https://m.media-amazon.com/images/I/41bqnz0wEDL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 21,
      name: "Solor Bottles",
      ratings: 4.2,
      price: 325,
      discount: 15,
      stockQuantity: 75,
      image:
        "https://m.media-amazon.com/images/I/51kIplGc7YL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 22,
      name: "How To Stop Time",
      ratings: 4.5,
      price: 500,
      discount: 100,
      stockQuantity: 100,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKBMC6dQbUPDjJw8fbVpN58Ao_Tk_lyUCGIjtvBQ0s_wIEjFurzynePchIhSC-EGqzeXweaQqfnYif8ijlM1IngbPCcDEd9hN3Bk-CzPtLz1H0sQxvtR1C&usqp=CAE",
    },
    {
      id: 23,
      name: "Magic Water Book",
      ratings: 5,
      price: 69.99,
      discount: 4.99,
      stockQuantity: 50,
      image: "https://m.media-amazon.com/images/I/61OHDYMKEjL._SX679_.jpg",
    },
    {
      id: 24,
      name: "IQOO Neon 9 Pro Mobile",
      ratings: 4.2,
      price: 32500,
      discount: 1500,
      stockQuantity: 75,
      image:
        "https://m.media-amazon.com/images/I/41m-C1HHkIL._SX300_SY300_QL70_FMwebp_.jpg",
    },
  ];
  // Mock data for orders
  const mockOrders = [
    {
      id: 1,
      customerId: 101,
      customerName: "John Doe",
      Gender: "Male",
      email: "alice@example.com",
      orderDate: "2024-03-12",
      status: "Pending",
    },
    {
      id: 2,
      customerId: 102,
      customerName: "Jane Smith",
      Gender: "Male",
      email: "alice@example.com",
      orderDate: "2024-03-12",
      status: "Delivered",
    },
    {
      id: 3,
      customerId: 103,
      customerName: "Alice Johnson",
      Gender: "Male",
      email: "alice@example.com",
      orderDate: "2024-03-12",
      status: "Processing",
    },
    {
      id: 4,
      customerId: 104,
      customerName: "Bob Brown",
      Gender: "Male",
      email: "alice@example.com",
      orderDate: "2024-03-13",
      status: "Delivered",
    },
    {
      id: 5,
      customerId: 105,
      customerName: "Emily Wilson",
      Gender: "FeMale",
      email: "alice@example.com",
      orderDate: "2024-03-13",
      status: "Pending",
    },
    {
      id: 6,
      customerId: 106,
      customerName: "Michael Davis",
      Gender: "Male",
      email: "alice@example.com",
      orderDate: "2024-03-13",
      status: "Processing",
    },
    {
      id: 7,
      customerId: 107,
      customerName: "Sarah Clark",
      Gender: "FeMale",
      email: "alice@example.com",
      orderDate: "2024-03-14",
      status: "Delivered",
    },
    {
      id: 8,
      customerId: 108,
      customerName: "David Garcia",
      Gender: "Male",
      email: "alice@example.com",
      orderDate: "2024-03-14",
      status: "Pending",
    },
    {
      id: 9,
      customerId: 109,
      customerName: "Jennifer Lee",
      Gender: "FeMale",
      email: "alice@example.com",
      orderDate: "2024-03-14",
      status: "Processing",
    },
    // Add more orders as needed...
  ];
  
  // Mock data for customers
  const mockCustomers = [
    {
      id: 101,
      name: "John Doe",
      Gender: "Male",
      email: "john@example.com",
      address: "123 Main St, City, Country",
      phone: "+1234567890",
    },
    {
      id: 102,
      name: "Jane Smith",
      Gender: "Male",
      email: "jane@example.com",
      address: "456 Elm St, City, Country",
      phone: "+9876543210",
    },
    {
      id: 103,
      name: "Alice Johnson",
      Gender: "Male",
      email: "alice@example.com",
      address: "789 Oak St, City, Country",
      phone: "+1122334455",
    },
    {
      id: 104,
      name: "Sarah Clark",
      Gender: "FeMale",
      email: "john@example.com",
      address: "123 Main St, City, Country",
      phone: "+1234567890",
    },
    {
      id: 104,
      name: "Emily Wilson",
      Gender: "FeMale",
      email: "jane@example.com",
      address: "456 Elm St, City, Country",
      phone: "+9876543210",
    },
    {
      id: 106,
      name: "Jennifer Lee",
      Gender: "FeMale",
      email: "alice@example.com",
      address: "789 Oak St, City, Country",
      phone: "+1122334455",
    },
    // Add more customers as needed...
  ];
  
  // Mock data for delivery status options
  const deliveryStatusOptions = [
    "Pending",
    "Processing",
    "Delivered",
    "Cancelled",
  ];
  
  // Mock data for product categories
  const productCategories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home Decor",
    "Toys",
    "Sports",
  ];
  
  // Mock data for payment methods
  const paymentMethods = ["Credit Card", "Debit Card", "PayPal", "Bank Transfer"];
  
  export {
    productsall,
    mockOrders,
    mockCustomers,
    deliveryStatusOptions,
    productCategories,
    paymentMethods,
  };
  