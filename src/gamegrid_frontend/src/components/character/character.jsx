import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdQuestionMark } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step5 from './step5';
import Step4 from './step4';
import Step6 from './step6';
import ReactAudioPlayer from 'react-audio-player';
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";


function CharacterSelect() {
  const [step,setStep]=useState(0);
  const [user,setUser]=useState({name:"",gender:"",class_:"",background:"",race:"",nft_image:""});
  const [playAudio, setPlayAudio] = useState(false);



 const onSummon = ()=>{

  // men 
  // warrior
    if(user.race==="human"&& user.class_==="warrior"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A seasoned warrior of the blockchain, he battles against the forces of centralization. With his sword forged from digital assets, he seeks to protect the decentralized future and inspire others to join the revolution."}));
    }
    if(user.race==="elf"&& user.class_==="warrior"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A guardian of the digital forests, he wields his sword with elegance, trained by ancient coders. Driven by a passion for freedom, he fights to safeguard his community from the encroachment of corporate greed."}));
    }
    if(user.race==="dwarf"&& user.class_==="warrior"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A stalwart defender of his crypto clan, he blends tradition with technology, wielding tools from the old world to reclaim digital treasures. His strength lies in his unwavering loyalty to his people and their values."}));
    }
    if(user.race==="halfling"&& user.class_==="warrior"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"Small in stature but immense in heart, he champions the underdog, using his agility to outsmart adversaries. With a quick wit and a clever strategy, he proves that size doesn’t dictate courage in the crypto landscape."}));
    }
    if(user.race==="tiefling"&& user.class_==="warrior"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A warrior with a troubled past in the world of finance, he fights against the stigma surrounding his kind. With fierce determination, he aims to redefine his legacy as a protector of the decentralized dream."}));
    }

    // wizard
    if(user.race==="human"&& user.class_==="wizard"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"An ambitious mage of the blockchain, he dives into whitepapers and smart contracts, seeking to master the arcane arts of DeFi. His insatiable curiosity drives him to unlock the secrets of the crypto universe. "}));
    }
    if(user.race==="elf"&& user.class_==="wizard"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A master of elemental tokens, he draws his magic from the very fabric of the blockchain. With a commitment to maintaining equilibrium in a volatile market, he fights to protect the decentralized order."}));
    }
    if(user.race==="dwarf"&& user.class_==="wizard"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"Known for his alchemical skills in tokenomics, he fuses traditional craftsmanship with modern technology. His inventions help his clan navigate the complexities of the crypto world while preserving their legacy. "}));
    }
    if(user.race==="halfling"&& user.class_==="wizard"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A clever trickster, he uses his spells to outmaneuver rivals and escape perilous situations. His playful charm hides a sharp intellect, making him a valued ally in negotiations and trades."}));
    }
    if(user.race==="tiefling"&& user.class_==="wizard"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"Haunted by the shadows of his past, he channels forbidden knowledge to shape his own destiny. Torn between light and dark, he strives to use his powers for good, proving that change is possible."}));
    }

    // Rogue
    if(user.race==="human"&& user.class_==="rogue"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A master of stealth in the decentralized landscape, he navigates through code and contracts to pull off heists with precision. With connections across the blockchain, he&apos;s always one step ahead in the game. "}));
    }
    if(user.race==="elf"&& user.class_==="rogue"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"An agile scout, he stealthily protects the underprivileged, dismantling corrupt systems from the shadows. His heart beats for justice, ensuring that the oppressed have a voice in the digital world."}));
    }
    if(user.race==="dwarf"&& user.class_==="rogue"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A cunning treasure hunter, he utilizes his wits to uncover hidden gems in the vast expanse of crypto. His thirst for adventure often leads him into treacherous territories, but he thrives on the challenge."}));
    }
    if(user.race==="halfling"&& user.class_==="rogue"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"Charming and resourceful, he talks his way out of trouble and thrives in social situations, using his quick tongue to outsmart opponents without ever drawing a blade. "}));
    }
    if(user.race==="tiefling"&& user.class_==="rogue"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A shadowy figure in the world of crypto, he juggles loyalties and ambitions. With a sharp mind and an affinity for intrigue, he navigates the complexities of power in the decentralized realm."}));
      
      // cleric
    } if(user.race==="human"&& user.class_==="cleric"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A devoted follower of decentralization, he heals the wounds of the community while standing against central authority. His faith in blockchain technology inspires hope and unity among the people.  "}));
    }
    if(user.race==="elf"&& user.class_==="cleric"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A wise healer, he harnesses the energy of the blockchain to restore balance and guide the innocent. Known for his calming presence, he travels the digital landscape, offering aid wherever needed."}));
    }
    if(user.race==="dwarf"&& user.class_==="cleric"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A guardian of tradition, he wields divine magic to protect his kin from adversities in the crypto world. His resolve to uphold the values of decentralization embodies the spirit of resilience."}));
    }
    if(user.race==="halfling"&& user.class_==="cleric"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A spirited champion of joy, he spreads hope and positivity throughout the decentralized community. With his cheerful demeanor, he inspires others to embuser.race change and fight for a better future."}));
    }
    // 
    if(user.race==="tiefling"&& user.class_==="cleric"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"Struggling with the duality of his existence, he seeks redemption through acts of kindness in the decentralized space. His journey of self-discovery aims to prove that anyone can be a hero, regardless of their past. "}));


      / // ranger
    } if(user.race==="human"&& user.class_==="ranger"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A lone wanderer, he traverses the digital wilds, hunting forces against decentralization and safeguarding its future."}));
    }
    if(user.race==="elf"&& user.class_==="ranger"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A keen tracker, he communicates with animals and protects his crypto clans from encroachment. His bond with nature allows him to sense danger long before it arrives, making him a formidable guardian."}));
    }
    if(user.race==="dwarf"&& user.class_==="ranger"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"An expert in survival, he uses his skills to navigate treacherous terrains and defend the crypto world. His rugged tenacity and knowledge of the decentralized eco-system make him a trusted guide in the wilderness. |"}));
    }
    if(user.race==="halfling"&& user.class_==="ranger"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A cheerful scout, he delights in exploration and uses his agility to outmaneuver threats. With an infectious enthusiasm for adventure, he inspires those around him to embuser.race decentralization and web3 technologies."}));
    }
    if(user.race==="tiefling"&& user.class_==="ranger"&&user.gender==="male"){
      setUser(pre => ({...pre,background:"A mysterious figure, he roams the wilderness seeking answers about his lineage and fate. His internal struggles are mirrored in the financial world, and he seeks to reconcile his identity with his abilities."}));
    } 
    

    // women
    // warrior
    if(user.race==="human"&& user.class_==="warrior"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A fierce champion of justice, she leads her comrades in the fight for a decentralized future. Trained in both combat and code, she battles for the oppressed, hoping to inspire change in the digital landscape."}));
    }
    if(race==="elf"&& user.class_==="warrior"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A graceful warrior, she protects the traditions of her people in the digital age. With the agility of a dancer and the heart of a lion, she embodies the spirit of her ancestors in every battle for freedom."}));
    }
    if(race==="dwarf"&& user.class_==="warrior"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A resilient fighter, she upholds her clan's honor in the face of adversity. Armed with deep knowledge of the blockchain, she seeks to defend her home against any threats to their values and integrity."}));
    }
    if(race==="halfling"&& user.class_==="warrior"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A spirited defender, she uses her small size to her advantage, surprising foes with her courage and strategic mind. Her loyalty to her friends shines brightly in the heat of battle."}));
    }
    if(race==="tiefling"&& user.class_==="warrior"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A warrior battling against prejudice, she fights to earn her place in a decentralized world. Determined to prove herself, she channels her strength into championing the rights of the misunderstood. |"}));

      // wizard
    } if(race==="human"&& user.class_==="wizard"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"An ambitious mage, she seeks to unlock the mysteries of the blockchain through her studies. Her relentless pursuit of knowledge pushes the boundaries of magic, often leading her to uncharted territories."}));
    }
    if(race==="elf"&& user.class_==="wizard"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A wise spellcaster, she draws upon her ancestral magic to preserve the sacred knowledge of her people. Her connection to her lineage fuels her desire to protect their heritage in a rapidly changing world. "}));
    }
    if(race==="dwarf"&& user.class_==="wizard"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A practical enchanter, she combines craftsmanship with magic to create unique digital artifacts. Her innovations help her clan thrive, blending tradition with the promise of the future."}));
    }
    if(race==="halfling"&& user.class_==="wizard"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A mischievous sorceress, she enjoys bending the rules of magic to her whim. With a knack for illusion, her playful nature often leads to humorous situations, but her cleverness sees her through."}));
    }
    if(race==="tiefling"&& user.class_==="wizard"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A scholar of forbidden knowledge, she walks the line between light and dark in the crypto realm. Her unique perspective drives her to seek redemption, using her power to carve her own path. "}));
    } 
    
    // rogue
    if(race==="human"&& user.class_==="rogue"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A street-smart infiltrator, she uses her charm to gather intel and assets in the decentralized space. With connections in every corner of the blockchain, she navigates intrigue with ease and cunning. "}));
    }
    if(race==="elf"&& user.class_==="rogue"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A stealthy scout, she excels at moving unseen, dismantling corrupt systems while protecting the vulnerable. Her dedication to justice makes her a ghost in the shadows, ensuring balance."}));
    }
    if(race==="dwarf"&& user.class_==="rogue"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A clever trapper, she designs ingenious snares to outwit her enemies. With a love for puzzles, she incorporates her traps into her adventures, making her a formidable opponent in the digital arena."}));
    }
    if(race==="halfling"&& user.class_==="rogue"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A daring thief, she uses her agility to escape any situation unscathed. With a heart for helping those in need, she often steals from the wealthy to uplift the downtrodden."}));
    }
    if(race==="tiefling"&& user.class_==="rogue"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A cunning assassin, she navigates the shadows of the blockchain with lethal precision. Her complex past drives her to protect the innocent while confronting her own demons. "}));
    }
    
    // cleric
    if(race==="human"&& user.class_==="cleric"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A compassionate healer, she travels through the decentralized landscape, mending wounds and offering hope. Her unwavering faith fuels her desire to uplift others in dark times. "}));
    }
    if(race==="elf"&& user.class_==="cleric"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A serene priestess, she channels the energy of the blockchain to heal and protect. Her deep connection to the digital realm guides her actions, often mediating conflicts within her community. "}));
    }
    if(race==="dwarf"&& user.class_==="cleric"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A stalwart protector, she stands as a beacon of hope for her kin during challenging times. Known for her strength and resolve, she uses her divine powers to defend her home and its values."}));
    }
    if(race==="halfling"&& user.class_==="cleric"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A cheerful cleric, she spreads laughter and light wherever she goes. With her infectious joy, she uplifts spirits, believing that hope is the strongest weapon against despair in any community. "}));
    }
    if(race==="tiefling"&& user.class_==="cleric"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A conflicted healer, she seeks to prove that redemption is possible for all. Her journey is one of self-discovery, using her gifts to help others heal from their own scars. "}));
    } 
    
    // ranger
    if(race==="human"&& user.class_==="ranger"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A resourceful tracker, she uses her survival skills to thrive in the digital wilderness. Her bond with nature runs deep, and she feels a duty to protect the blockchain from external threats."}));
    }
    if(race==="elf"&& user.class_==="ranger"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"An adept hunter, she knows the digital forest intimately, fiercely protecting its secrets. With unmatched skills and a deep respect for the interconnected world, she ensures harmony between nature and technology. "}));
    }
    if(race==="dwarf"&& user.class_==="ranger"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A rugged explorer, she thrives in the untamed lands, ready for adventure. Her strength and loyalty make her a reliable companion, and she values the bonds formed in the journey. "}));
    }
    if(race==="halfling"&& user.class_==="ranger"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A cheerful guide, she brings joy and laughter to her travels through the wilderness of the blockchain. With a knack for discovering hidden treasures, she inspires others to embrace the adventure."}));
    }
    if(race==="tiefling"&& user.class_==="ranger"&&user.gender==="female"){
      setUser(pre => ({...pre,background:"A solitary wanderer, she searches for her true self amidst the wilds of the decentralized realm. Struggling with her identity, she uses her skills to carve a place for herself while exploring her heritage."}));
    } 
  }
  
 

  const handleNext = () =>{
    step < 6 &&setStep(prev => prev + 1);
  }
  
  const handleBack = () =>{
    step > 0 &&setStep(prev => prev - 1);
  }

  const creation_steps =[<Step1 handleNext={handleNext} handleback={handleBack} setUser={setUser} />,<Step2 handleNext={handleNext} handleBack={handleBack} setUser={setUser} />,<Step3 handleNext={handleNext} handleBack={handleBack} setUser={setUser} />,<Step4 handleNext={handleNext} handleBack={handleBack} setUser={setUser} />,<Step5 handleNext={handleNext} handleBack={handleBack} user={user} setUser={setUser} onSummon={onSummon} />,<Step6 handleNext={handleNext} handleBack={handleBack} user={user} setUser={setUser}  />];
  return (
    <section className=' w-full text-white h-full overflow-y-scroll' style={{
        background:"url(/static/scenes/character.png)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}> 
      

      <div className='w-full px-5 flex items-center text-3xl py-3 bg-opacity-80 backdrop-blur-lg bg-slate-950 gap-5 fixed z-50'>
       <Link to={"/quests"} className='bg-slate-800 p-2 rounded-full text-xl'><IoIosArrowBack /></Link>  Mission 1: Create Your Hero
        </div>
      <div className='w-full min-h-screen  overflow-y-scroll bg-opacity-80 bg-slate-900 backdrop-blur-sm pb-56 flex items-center justify-center'>
     {/* Conatainer */}
     <div className='w-full h-full flex flex-col xl:flex-row items-center xl:items-start justify-center gap-5 xl:gap-24 container mx-auto p-5 xl:px-24 mt-24'>

 {/* Charcater Sheet */}
 <div className=' gap-5 items-start w-full xl:w-72 justify-center'>
      {/* coins */}
      <div className='text-orange-500 text-sm text-end font-bold '>
          <span className='text-xl'>0</span>gg
      </div>
      {/* level grade*/}
           <div className='w-full flex gap-3 items-center'>
        <div>
           <span className='text-sm'>Lv</span>1
        </div>
        <div className='flex items-center w-full'>
        <div className='bg-gray-800 p-1 h-8 w-4 rounded border border-gray-500'>

        </div>
        {/* Progress */}
        <div className='bg-slate-800 w-full p-1 border border-gray-500 rounded-r-full'>
          <div className='w-1 p-1 bg-orange-600'>
          </div>
        </div>
      </div>
      </div>
   
      {/* Summary */}
      <div className='flex flex-col font-bold text-lg'>
      <div>
        Name: {user.name? user.name :"?"}
      </div>
      </div>
 </div>
{/* Edit pallete */}
 <div className='bg-slate-900 w-full rounded border border-gray-500 bg-opacity-50 backdrop-blur-sm p-5 pb-12 '>
   {creation_steps[step]}
 </div>
 
     </div>
        </div> 
   </section>
  )
}

export default CharacterSelect;