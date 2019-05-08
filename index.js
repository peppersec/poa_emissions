const Web3 = require('web3')

const web3 = new Web3('https://core.poa.network')

const ABI = require('./abi.json')

const contrAddr = '0x7E9B90B22cdD1F6aA206f0D852aC96212217d60E'

const contract = new web3.eth.Contract(ABI, contrAddr)
const validators = []
validators['0xBC70E7A838eF3D468e25EfA5eCb8946d3D0f913B'] = 'ilmira'
validators['0x8E6cdFacDAe218Ae312aD24Cb1e8cf34Bb9f6b61'] = 'jeff'
validators['0x7A6a585dB8cDFa88B9e8403c054ec2e912E9D32E'] = 'john L'
validators['0x49bbdeBd7f3D39f297135d7Af3831Ce152a99b67'] = 'jim'
validators['0x0f1e7c925D502855dCD31DdE4703770A0CF6cDFC'] = 'rocco'
validators['0x8FE38B0349B99C17242d44D5B1b859B0e941DcEd'] = 'sherina'
validators['0xDC4765D9DAbF6c6c4908fE97E649Ef1F05Cb6252'] = 'henry'
validators['0x3091AEe5Cb7a290da8E05cC4b70dac7715de39A0'] = 'john D'
validators['0x6E4F8fc73B93BA5160FADF914603a590D4676494'] = 'michael'
validators['0x18Bea833D503341C529a788c82909337e552a44e'] = 'lillian'
validators['0xf1F51e933D6aAd056236E0a45c1cC5b335ca1A75'] = 'stephen'
validators['0x28E7605a631441870e80A283Aa43Ae4145f82cc3'] = 'melanie'
validators['0xdAd49e6CbDE849353ab27DeC6319E687BFc91A41'] = 'alex'
validators['0x6E349BE21Acb0db3B2092fd4E3B738202842697E'] = 'marat'
validators['0x71300d93a8CdF93385Af9635388cF2D00b95a480'] = 'adam'
validators['0x59D82a4B6068188ac06605A8416b5C7D40d6Fc43'] = 'xiaobo'
validators['0x6109DC5ba1159EA6974C4B15EA9e68a180f85753'] = 'artiom'
validators['0x0C6C0665804fD28CD8d1B2208104E31Ce2051Ce2'] = 'kristina'
validators['0x5EE341Ac44D344AdE1cA3a771c59B98eb2A77DF2'] = 'oxana'
validators['0xf81110c5Cc7f258eCFd079FAeCc140331d187232'] = 'ian'
validators['0x4d135B9280E5377Deae02e18748580FD8E2e3eB7'] = 'irvine'

contract.getPastEvents('Vote',  {
  fromBlock: 0,
    toBlock: 'latest'
}).then((events) => {
  events.forEach((e) =>{
    let validator = validators[e.returnValues.voterMiningKey]
    if(!validator) {
        console.log(e)
    }
    const decisions = {
      '1': 'Send',
      '3': 'Freeze',
      '2': 'Burn'
    }
    let decision = decisions[e.returnValues.decision]
    console.log('decision', decision, 'Name', validator)
  })
})