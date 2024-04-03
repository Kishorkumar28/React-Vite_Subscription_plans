import Square from "./Components/Square";

function App() {
  const data = [
    
    {
      title: "FREE",
      price:" $ 0/month",
      color: "white",
      features: [
        { name: "5 Users", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "Communty Projects", isAvailable: true },
        { name: "Unlimited Private Projects", isAvailable: false},
        { name: "Dedicated Phone Support", isAvailable: false},
        { name: "Free Subdoamin", isAvailable: false},
        { name: "Monthly Status Reports", isAvailable: false},
      ],
    },
    {
      title: "PLUS",
      price:" $ 9/month",
      color: "white",
      features: [
        { name: "5 Users", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "Communty Projects", isAvailable: true },
        { name: "Unlimited Private Projects", isAvailable: true},
        { name: "Dedicated Phone Support", isAvailable: true},
        { name: "Free Subdoamin", isAvailable: true},
        { name: "Monthly Status Reports", isAvailable: false},
      ],
    },
    {
      title: "PRO",
      price:" $ 49/month",
      color: "white",
      features: [
        { name: "5 Users", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "Communty Projects", isAvailable: true },
        { name: "Unlimited Private Projects", isAvailable: true},
        { name: "Dedicated Phone Support", isAvailable: true},
        { name: "Free Subdoamin", isAvailable: true},
        { name: "Monthly Status Reports", isAvailable: true},
      ],
    },

    
  ];

  return (
    <div className="parent-container">
      {data.map((element, index) => (
        <Square
          key={index}
          width={400}
          height={650}
          background={element.color}
          price={element.price}
          message={element.title}
          items={element.features}
        />
      ))}
    </div>
  );
}

export default App;

// import React from "react";
// import Square, { Circle } from "./Components/Square";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   // 1
//   componentWillMount() {
//     console.log("Will Mount");
//   }

//   // 2
//   componentDidMount() {
//     console.log("Did mount");
//   }

//   // 3
//   componentWillUpdate() {
//     console.log("Updating");
//   }

//   // 4
//   componentDidUpdate() {
//     console.log("Updated");
//   }

//   handleDecrement = (e) => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   handleIncrement = (e) => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.handleDecrement}>-</button>
//         <p>{this.state.count}</p>
//         <button onClick={this.handleIncrement}>+</button>
//       </>
//     );
//   }
// }

// export default App;
