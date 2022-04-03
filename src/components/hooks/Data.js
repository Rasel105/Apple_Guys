const Data = () => {
     const [data, setData] = ([])
     fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
          .then(res => res.json)
          .then(data => setData(data))
     console.log(data)
}