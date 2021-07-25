import axios from 'axios'

const main = async () => {
    try{
    const result = await axios.post(
        'https://api.thegraph.com/subgraphs/name/superfluid-finance/superfluid-rinkeby',
        {
            query:`
            {
              tokens( where:{symbol: "fDAIx"} ) {
                id
                flows(where: {owner:"0xbE8Ace29e3022CD6841821315F82a6C2484fE585"}) {
                  id
                  sum
                  owner {
                    id
                  }
                  recipient {
                    id
                  }
                }
              }
            }
              
            
            `
        }
    )
    console.log(result.data.data.tokens);
    } catch(error) {
    console.error(error)
    }
}

main()