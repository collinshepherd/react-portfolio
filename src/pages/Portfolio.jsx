const styles = { 
  h1: {
      fontSize: "3rem",
      color: "#fff",
  },
  text: {
    color: "#fff",
  }
}


export default function Portfolio() {
  return (
    <div className="container-fluid mt-3">
      <h1 className="flex justify-center" style={styles.h1}>About Page</h1>
      <p style={styles.text}>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
