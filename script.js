// Bacteria and Antibiotic data
const bacteriaData = [

    {
        name: "Enterococcus Faecalis (VS)",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin G" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin" }
        ],
        allAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Televancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Televancin"}, 
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
        ]
    },

    {
        name: "Enterococcus Faecium (VS)",
        preferredAntibiotics: [
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"}

        ]
    },

    {
        name: "Enterococcus Faecalis (VRE)",
        preferredAntibiotics: [
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},

        ]
    },

    {
        name: "Enterococcus Faecium (VRE)",
        preferredAntibiotics: [
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"}

        ]
    },

    {
        name: "Staphylococcus Aureus (MSSA)",
        preferredAntibiotics: [
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"}, 
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]  

    },

    {
        name: "Staphylococcus Aureus (MRSA)",
        preferredAntibiotics: [
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"}, 
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
           { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
        ]
    },

    {
        name: "Staphylococcus Coagulase-negative (MS)",
        preferredAntibiotics: [
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"}, 
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Staphylococcus Coagulase-negative (MR)",
        preferredAntibiotics: [
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"} 

        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},

        ]
    },

    {
        name: "Staphylococcus Epidermidis (MR)",
        preferredAntibiotics: [
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"} 
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
        ]
    },

    {
        name: "Staphylococcus Epidermidis (MS)",
        preferredAntibiotics: [
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}

        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Staphylococcus Lugdunensis",
        preferredAntibiotics: [
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[ 
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            
        ]
    },

    {
        name: "Staphylococcus Saprophyticus",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}
        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam" },
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin" },
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Streptococcus Anginosus gp",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}

        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},

        ]
    },

    {
        name: "Streptococcus Pyogenes (Group A)",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Streptococcus Agalactiae (Group B)",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Streptococcus gp C, F, G",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Streptococcus Pneumoniae",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Virdans Streptococcus",
        preferredAntibiotics: [
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
           { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Arcanobacter sp.",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}, 
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}, 


        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ]
    },

    {
        name: "Corynebacterium Diphtheriae",
        preferredAntibiotics: [
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}, 
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Corynebacterium Jeikeium",
        preferredAntibiotics: [
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}

        ],
        allAntibiotics:[
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}

        ]
    },

    {
        name: "Listeria Monocytogenes",
        preferredAntibiotics: [
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"}

        ]
    },

    {
        name: "Nocardia sp.",
        preferredAntibiotics: [
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
        ],
        allAntibiotics:[
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ]
    },

    {
        name: "Aeromonas sp.",
        preferredAntibiotics: [
            //none in sanford guide that have preferred coverage 
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Citrobacter Freundii",
        preferredAntibiotics: [
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

        ],
        allAntibiotics:[
            { name: "Fosfomycin (oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Citrobacter Koseri",
        preferredAntibiotics: [
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Enterobacter Cloacae",
        preferredAntibiotics: [
            //none in sanford guide that have preferred coverage 
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Escherichia Coli (S)",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins", detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Escherichia Coli (ESBL)",
        preferredAntibiotics: [
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            
        ]
    },

    {
        name: "Escherichia Coli (KPC)",
        preferredAntibiotics: [
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},

        ],
        allAntibiotics:[
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 

        ]
    },

    {
        name: "Escherichia Coli (MBL)",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            
        ]
    },

    {
        name: "Klebsiella Pneumoniae (S)",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Klebsiella Oxytoca (S)",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
        ],
        allAntibiotics:[
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Klebsiella sp. (ESBL)",
        preferredAntibiotics: [
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Klebsiella sp. (KPC)",
        preferredAntibiotics: [
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
        ],
        allAntibiotics:[
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
        ]
    },

    {
        name: "Klebsiella sp. (MBL)",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
        ]
    },

    {
        name: "Klebsiella Aerogenes",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Morganella Morganii",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins", detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Proteus Mirabilis",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Proteus Vulgaris",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Providencia sp.",
        preferredAntibiotics: [
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ],
        allAntibiotics:[
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Salmonella sp.",
        preferredAntibiotics: [

        ],
        allAntibiotics:[
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
        ]
    },

    {
        name: "Serratia Marcescens",
        preferredAntibiotics: [

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 

        ]
    },

    {
        name: "Shigella sp.",
        preferredAntibiotics: [
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Yersinia Enterocolitica",
        preferredAntibiotics: [
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Bartonella sp.",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
        ],
        allAntibiotics:[
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
        ]
    },

    {
        name: "Bordetella Pertussis",
        preferredAntibiotics: [
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}
        ]
    },

    {
        name: "Borrelia Burgdoferi",
        preferredAntibiotics: [
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

        ],
        allAntibiotics:[
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"}, 
        ]
    },

    {
        name: "Brucella sp.",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Campylobacter Jejuni",
        preferredAntibiotics: [ 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
        ],
        allAntibiotics:[
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Capnocytophaga sp.",
        preferredAntibiotics: [
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
        ]
    },

    {
        name: "Coxiella Burnetii",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ]
    },

    {
        name: "Ehrlichia, Anaplas",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

        ],
        allAntibiotics:[
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
        ]
    },

    {
        name: "Eikenella sp.",
        preferredAntibiotics: [

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Francisella Tularensis",
        preferredAntibiotics: [
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},

        ]
    },

    {
        name: "Haemophilus Ducreyi",
        preferredAntibiotics: [
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ],
        allAntibiotics:[
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
        ]
    },

    {
        name: "Haemophilus Influenzae",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Kingella sp.",
        preferredAntibiotics: [
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"}, 
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },

        ]
    },

    {
        name: "Klebsiella Granulomatis",
        preferredAntibiotics: [
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
 

        ]
    },

    {
        name: "Legionella sp.",
        preferredAntibiotics: [
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
        ]
    },

    {
        name: "Leptospira sp.",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Moraxella Catarrhalis",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
        ]
    },

    {
        name: "Neisseria Meningitidis",
        preferredAntibiotics: [
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Pasturella Multocida",
        preferredAntibiotics: [
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Rickettsia Rickettsii",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  

        ]
    },

    {
        name: "Vibrio Cholera",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Vibrio Parahemolyticus",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Vibrio Vulnificus",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ]
    },

    {
        name: "Yersinia Pestis",
        preferredAntibiotics: [            
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Acinetobacter Baumannii",
        preferredAntibiotics: [            
            {name: "None"}

        ],
        allAntibiotics:[
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},

        ]
    },

    {
        name: "Burkholderia cepacia complex",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
        ]
    },
    {
        name: "Pseudomonas Aeruginosa",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},

        ],
        allAntibiotics:[
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Stenotrophomonas Maltophilia",
        preferredAntibiotics: [
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
        ]
    },

    {
        name: "Chlamydia Trachomatis",
        preferredAntibiotics: [
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
        ],
        allAntibiotics:[
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Chlamydophila sp.",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ]
    },

    {
        name: "Mycoplasma Pneumoniae",
        preferredAntibiotics: [
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  

        ],
        allAntibiotics:[
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Bacteroides Fragilis",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 

        ]
    },

    {
        name: "Fusobacterium Necrophorum",
        preferredAntibiotics: [
            { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Prevotella sp.",
        preferredAntibiotics: [
            { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Actinomyces sp.",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },

        ]
    },

    {
        name: "Clostridium sp.",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},

        ],
        allAntibiotics:[
            { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}

        ]
    },

    {
        name: "Cutibacterium acnes",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},

        ],
        allAntibiotics:[
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ]
    },

    {
        name: "Peptostreptococci",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ],
        allAntibiotics:[
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },
];














//abx dosing
const antibioticDosingData = {

    "Penicillin G": {
        indications: [
            {
                name:"Actinomycosis, severe or extensive",
                dose: "IV: 10 - 20 million units/day as a continuous infusion or divided doses every 4-6 hours", 
                description: "Duration of 4-6 weeks followed by appropriate oral therapy long term "
            }, 

            {
                name: "Anthrax, systemic, including meningitis, treatment", 
                dose: "IV: 4 million units every 4 hours, in combination with other appropriate agents ≥ 2 weeks",
                description: ""
            }, 

            {
                name: "Meningitis, bacterial", 
                dose: "IV: 4 million units every 4 hours", 
                description: "Duration duration is 7-21 days depending on pathogen and clinical response"
            }, 

            {
                name: "Neurosyphilis", 
                dose: "IV: 18-24 million units/day as a continuous infusion or in divided doses every 4 hours for 10-14 days. ", 
                description: "Penicillin desensitization and treatment is recommended in patients with a history of severe penicillin allergy "
            }, 

            {
                name: "Osteomyelitis and/or discitis", 
                dose: "IV: 20-24 million units/day as a continuous infusion or in divided doses every 4 hours. ", 
                description: "Generally treat for ≥ 6 weeks depending on clinical response"
            }, 

            {
                name: "Prosthetic joint infection", 
                dose: "IV: 20-24 million units/day as a continuous infusion or in divided doses every 4 hours. ", 
                description: "Generally treat for 4-6 weeks depending on clinical response"
            }, 

            {
                name: "Toxic shock syndrome", 
                dose: "IV: 4 million units every 4 hours in combination with clindamycin. ", 
                description: "Treat patients who are bacteremic for ≥ 2 weeks"
            }, 

        ],
        renalAdjustments: {
            "≥ 50": "No adjustment needed",
            "> 30-49": "Administer 50-75% of usual indication specific dose",
            "10-29": "Administer 25-50% of usual indication specific dose",
            "< 10":"Administer 20-25% of the usual indication specific dose",
            "HD": "Administer 100% of the usual indication specific dose for the first dose, then administer 25-50% of the usual indication specific dose as a continuous infusion or in divided doses every 4-6 hours thereafter", 
            "Peritoneal dialysis": "Dose as for CrCl < 10 mL/min",
            "CRRT": "Clearance dependent on effluent flow rate: Administer 100% of the usual indication specific dose for the first dose, then administer 50-75% of the usual indication specific dose as a continuous infusion or in divided doses every 4-6 hours thereafter"
        }
    },

    "Penicillin VK": {
        indications: [
            {
                name: "Actinomycosis", 
                dose: "Oral: 500 - 1000 mg every 6 hours",
                description: "Duartion is uncertain: experts suggest 2-6 months for mild infection and 6-12 months for severe extensive infection",
            },
            {
                name: "Anthrax", 
                dose: "Oral: 500 mg every 6 hours",
                description: "",
            },
            {
                name: "Meningococcal prophylaxis in patients with complement deficiency", 
                dose: "Oral: 500 mg twice daily in addition to meningococcal vaccination",
                description: "",
            },
            {
                name: "Pneumococcal prophylaxis in patients at high risk ", 
                dose: "Oral: 250 - 500 mg twice daily",
                description: "",
            },
            {
                name: "Prosthetic Joint Infection", 
                dose: "Oral: 500 mg 2-4 times daily",
                description: "",
            },
            {
                name: "Skin and soft tissue infection", 
                dose: "Cellulitis: 250 - 500 mg twice daily ---- Erysipelas: 500 mg every 6 hours ---- Erysipeloid: 500 mg every 6 hours " ,
                description: "Duartion is uncertain: experts suggest 2-6 months for mild infection and 6-12 months for severe extensive infection",
            },
            {
                name: "Streptococcus, Group A", 
                dose: "Pharyngitis: 500 mg orally 2-3 times daily  ---- Secondary prophylaxis: 250 mg orally twice daily ---- Chronic carriage: 500 mg orally 4 times daily " ,
                description: "Duartion is uncertain: experts suggest 2-6 months for mild infection and 6-12 months for severe extensive infection",
            },
        ],
        renalAdjustments: {
            "≥ 50": "No dosage adjustment necessary",
            "> 30-49": "No dosage adjustment necessary",
            "10-29": "No dosage adjustment necessary",
            "< 10":"No dosage adjustment necessary",
            "HD": "Oral: no dose adjustment necessary. On dialysis days administer at least 1 dose after HD", 
            "Peritoneal dialysis": "No dosage adjustment necessary",
            "CRRT": "No dosage adjustment necessary",
        }
    },

    "Nafcillin": {
        indications: [
            {
                name: "Bloodstream Infection", 
                dose: "IV: 2 grams every 4 hours",
                description: "Treat uncomplicated bacteremia for ≥ 14 days starting from day of first negative blood culture",
            },
            {
                name: "Endocarditis",
                dose: "12 grams/day in 4-6 divided doses for 6 weeks",
                description: "",
            },
            {
                name: "Meningitis", 
                dose: "IV 2 grams every 4 hours", 
                description: "Duration is 10-14 days, depending on causative pathogens and clinical response",
            },

            {
                name: "Osteomyelitis", 
                dose: "IV: 1.5 - 2 grams every 4-6 hours or via continuous infusion ≥ 6 weeks depending on extent of infection, debridemnet, and clinical response", 
                description: "",
            },

            {
                name: "Pneumonia", 
                dose: "IV: 2 grams every 4 hours", 
                description: "",
            },

            {
                name: "Prosthetic Joint Infection", 
                dose: "IV: 1.5 - 2 grams every 4-6 hours", 
                description: "Duration ranges from 2 - 6 weeks depending on prosthesis management, use of rifampin, and other patient specific factors",
            },
            {
                name: "Skin and Soft Tissue Infection", 
                description: "1-2 grams every 4-6 hours depending on type of infection (Cellulitis, Necrotizing infection, Surgical site infection)", 
                description: "",
            },
        ],
        renalAdjustments: {
            "≥ 50": "No dosage adjustment necessary",
            "> 30-49": "No dosage adjustment necessary",
            "10-29": "No dosage adjustment necessary",
            "< 10":"No dosage adjustment necessary",
            "HD": "No dosage adjustment necessary", 
            "Peritoneal dialysis": "No dosage adjustment necessary",
            "CRRT": "No dosage adjustment necessary",
        }
    },


    "Meropenem": {
        indications: [
            {
                name:"Anthrax",
                dose: "2g IV every 8 hours", 
                description: "Should be dosed as part of an appropriate combination regimen"
            },

            {
                name: "Bloodstream Infection",
                dose: "1g IV every 8 hours",
                description: "Usual duration is 7-14 days depending on source, pathogen, and clinical response"
            },
            {
                name: "Cystic Fibrosis",
                dose: "2g IV every 8 hours",
                description:""
            }, 

            {
                name: "Diabetic Foot Infection (moderate to severe)", 
                dose: "1g IV every 8 hours",
                description:""

            }, 

            {
                name: "Intra-abdominal infections", 
                dose: "1g IV every 8 hours", 
                description:""

            }, 
 

            {
                name: "Melioidosis or glanders", 
                dose: "1g IV every 8 hours", 
                description:""

            }, 

            {
                name: "Meningitis (bacterial)", 
                dose: "2g IV every 8 hours", 
                description:""

            }, 


            {
                name: "Osteomyelitis and/ or discitis", 
                dose: "1g IV every 8 hours",
                description: "Duration should be > 6 weeks"
            }, 

            {
                name: "Pneumonia (CAP/HAP/VAP)", 
                dose: "1g IV every 8 hours", 
                description:""

            }, 

            {
                name: "Prosthetic Joint Infection", 
                dose: "1g IV every 8 hours", 
                description:"", 
                description:""


            }, 

            {
                name: "Sepsis and Septic shock", 
                dose: "1-2g IV every 8 hours", 
                description:""

            }, 

            {
                name: "SSTI Infection", 
                dose: "1g IV every 8 hours", 
                description:""

            }, 

            {
                name: "UTI (complicated)", 
                dose: "1g IV every 8 hours", 
                description:""

            }
        ],
        renalAdjustments: {
            "≥ 50": "No adjustment needed",
            "> 25-49": "1g IV every 12 hours",
            "10-24": "500 mg IV every 12 hours",
            "< 10":" 500 mg IV every 24 hours",
            "HD": "500 mg every 24 hours", 
            "Peritoneal dialysis": "500 mg every 24 hours",
            "CRRT": "Clearance dependent on effluent flow rate"
        }
    },
    // Add other antibiotics with detailed data here...
};

function loadAntibioticData() {
    const urlParams = new URLSearchParams(window.location.search);
    const antibioticName = urlParams.get('name');

    if (antibioticName) {
        document.getElementById('antibiotic-name').textContent = antibioticName;

        const antibioticData = antibioticDosingData[antibioticName];
        if (antibioticData) {
            const indicationsTabs = document.getElementById('indications-tabs');
            indicationsTabs.innerHTML = ''; // Clear previous tabs

            antibioticData.indications.forEach((indication, index) => {
                // Create tab button with toggle functionality
                const tab = document.createElement('button');
                tab.textContent = indication.name;
                tab.classList.add('tab');
                tab.onclick = () => toggleIndication(indication, tab);

                indicationsTabs.appendChild(tab);

                // Create initial content, hidden by default
                const indicationContent = document.createElement('div');
                indicationContent.classList.add('indication-content');
                indicationContent.style.display = 'none'; // Start hidden

                indicationContent.innerHTML = `
                    <p><strong>Dose:</strong> ${indication.dose}</p>
                    <p>${indication.description}</p>
                `;

                indicationsTabs.appendChild(indicationContent);
            });

            // Populate the single renal adjustment table at the bottom
            const renalTableBody = document.getElementById('renal-adjustment-body');
            renalTableBody.innerHTML = ''; // Clear previous data

            Object.keys(antibioticData.renalAdjustments).forEach(range => {
                const row = document.createElement('tr');
                const rangeCell = document.createElement('td');
                const adjustmentCell = document.createElement('td');

                rangeCell.textContent = range;
                adjustmentCell.textContent = antibioticData.renalAdjustments[range];

                row.appendChild(rangeCell);
                row.appendChild(adjustmentCell);
                renalTableBody.appendChild(row);
            });
        }
    }
}

function toggleIndication(indication, tab) {
    const contentDiv = tab.nextElementSibling;

    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
        tab.classList.add('active');
    } else {
        contentDiv.style.display = 'none';
        tab.classList.remove('active');
    }
}

// Initialize the page
if (window.location.pathname.includes('antibiotic.html')) {
    window.onload = loadAntibioticData;
}
















// All antibioitcs listed by class 
const antibioticsByClass = [
    { name: "Penicillin G", class: "Penicillins"},
    { name: "Penicillin VK", class: "Penicillins"},
    { name: "Nafcillin", class: "Penicillins"},
    { name: "Oxacillin", class: "Penicillins"},
    { name: "Cloxacillin", class: "Penicillins"},
    { name: "Flucloxacillin", class: "Penicillins"},
    { name: "Dicloxacillin", class: "Penicillins"},
    { name: "Ampicillin", class: "Penicillins"},
    { name: "Amoxicillin", class: "Penicillins"},
    { name: "Amoxicillin-Clavulanate", class: "Penicillins"},
    { name: "Ampicillin-Sulbactam", class: "Penicillins"},
    { name: "Piperacillin-Tazobactam", class: "Penicillins"},
    { name: "Doripenem", class: "Carbapenems"},
    { name: "Ertapenem", class: "Carbapenems"},
    { name: "Imipenem-Cilastatin", class: "Carbapenems"},
    { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems"},
    { name: "Meropenem", class: "Carbapenems"},
    { name: "Meropenem-Vaborbactam", class: "Carbapenems"},
    { name: "Aztreonam", class: "Monobactams"},
    { name: "Ciprofloxacin", class: "Fluoroquinolones"},
    { name: "Delafloxacin", class: "Fluoroquinolones"},
    { name: "Ofloxacin", class: "Fluoroquinolones"},
    { name: "Levofloxacin", class: "Fluoroquinolones"},
    { name: "Moxifloxacin", class: "Fluoroquinolones"},
    { name: "Norfloxacin", class: "Fluoroquinolones"},
    { name: "Prulifloxacin", class: "Fluoroquinolones"},
    { name: "Gemifloxacin", class: "Fluoroquinolones"},
    { name: "Gatifloxacin", class: "Fluoroquinolones"},
    { name: "Cefazolin", class: "Cephalosporins (IV)"},
    { name: "Cefotetan", class: "Cephalosporins (IV)"},
    { name: "Cefoxitin", class: "Cephalosporins (IV)"},
    { name: "Cefuroxime", class: "Cephalosporins (IV)"},
    { name: "Cefotaxime", class: "Cephalosporins (IV)"},
    { name: "Ceftizoxime", class: "Cephalosporins (IV)"},
    { name: "Cefoperazone", class: "Cephalosporins (IV)"},
    { name: "Ceftriaxone", class: "Cephalosporins (IV)"},
    { name: "Ceftazidime", class: "Cephalosporins (IV)"},
    { name: "Cefepime", class: "Cephalosporins (IV)"},
    { name: "Cefepime-Enmetazobactam", class: "Cephalosporins (IV)"},
    { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)"},
    { name: "Ceftaroline", class: "Cephalosporins (IV)"},
    { name: "Ceftobiprole", class: "Cephalosporins (IV)"},
    { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)"},
    { name: "Cefiderocol", class: "Cephalosporins (IV)"},
    { name: "Cefadroxil", class: "Cephalosporins (Oral)"},
    { name: "Cephalexin", class: "Cephalosporins (Oral)"},
    { name: "Cefaclor", class: "Cephalosporins (Oral)"},
    { name: "Cefprozil", class: "Cephalosporins (Oral)"},
    { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)"},
    { name: "Cefixime", class: "Cephalosporins (Oral)"},
    { name: "Ceftibuten", class: "Cephalosporins (Oral)"},
    { name: "Cefpodoxime", class: "Cephalosporins (Oral)"},
    { name: "Cefdinir", class: "Cephalosporins (Oral)"},
    { name: "Cefditoren", class: "Cephalosporins (Oral)"},
    { name: "Gentamicin", class: "Aminoglycosides"},
    { name: "Tobramycin", class: "Aminoglycosides"},
    { name: "Amikacin", class: "Aminoglycosides"},
    { name: "Plazomicin", class: "Aminoglycosides"},
    { name: "Clindamycin", class: "Lincosamides"},
    { name: "Erythromycin", class: "Macrolides"},
    { name: "Azithromycin", class: "Macrolides"},
    { name: "Clarithromycin", class: "Macrolides"},
    { name: "Telithromycin", class: "Macrolides"},
    { name: "Doxycycline", class: "Tetracyclines"},
    { name: "Eravacycline", class: "Tetracyclines"},
    { name: "Minocycline", class: "Tetracyclines"},
    { name: "Omadacycline", class: "Tetracyclines"},
    { name: "Tetracycline", class: "Tetracyclines"},
    { name: "Tigecycline", class: "Tetracyclines"},
    { name: "Daptomycin", class: "Glyc/Lipo"},
    { name: "Vancomycin", class: "Glyc/Lipo"},
    { name: "Teicoplanin", class: "Glyc/Lipo"},
    { name: "Telavancin", class: "Glyc/Lipo"},
    { name: "Oritavancin", class: "Glyc/Lipo"},
    { name: "Dalbavancin", class: "Glyc/Lipo"},
    { name: "Linezolid", class: "Oxazolids"},
    { name: "Tedizolid", class: "Oxazolids"},
    { name: "Polymyxin B", class: "Polymyxins"},
    { name: "Colistin", class: "Polymyxins"},
    { name: "Lefamulin", class: "Pleuromutilins"},
    { name: "Chloramphenicol", class: "Other"},
    { name: "Fusidic Acid", class: "Other"},
    { name: "Rifampin", class: "Other"},
    { name: "Trimethoprim-Sulfamethoxazole", class: "Other"},
    { name: "Nitrofurantoin", class: "Other"},
    { name: "Fosfomycin (IV)", class: "Other"},
    { name: "Fosfomycin (Oral)", class: "Other"},
    { name: "Pivmecillinam", class: "Other"},
    { name: "Metronidazole", class: "Other"},
    { name: "Pristinamycin", class: "Other"},
    // Add more antibiotics and their classes here...
];

// Function to group antibiotics by their class
function groupAntibioticsByClass(antibiotics) {
    const grouped = {};
    antibiotics.forEach(antibiotic => {
        const antibioticClass = antibiotic.class || "Other";
        if (!grouped[antibioticClass]) {
            grouped[antibioticClass] = [];
        }
        grouped[antibioticClass].push(antibiotic.name);
    });
    return grouped;
}

// Function to render antibiotics organized by class in bacteria.html
function renderAntibioticsByClass(bacteria) {
    const preferredContainer = document.getElementById('preferred-antibiotic-list');
    const allContainer = document.getElementById('all-antibiotic-list');

    preferredContainer.innerHTML = '';
    allContainer.innerHTML = '';

    // Group and render Preferred Antibiotics
    const groupedPreferred = groupAntibioticsByClass(bacteria.preferredAntibiotics);
    renderGroupedAntibiotics(groupedPreferred, preferredContainer);

    // Group and render All Antibiotics
    const groupedAll = groupAntibioticsByClass(bacteria.allAntibiotics);
    renderGroupedAntibiotics(groupedAll, allContainer);
}

// Helper function to render grouped antibiotics in the specified container
function renderGroupedAntibiotics(groupedAntibiotics, container) {
    for (const [antibioticClass, antibiotics] of Object.entries(groupedAntibiotics)) {
        const classSection = document.createElement("div");
        const classHeader = document.createElement("h3");
        classHeader.textContent = antibioticClass;
        classSection.appendChild(classHeader);

        const list = document.createElement("ul");
        antibiotics.forEach(antibiotic => {
            const listItem = document.createElement("li");
            listItem.textContent = antibiotic;
            listItem.onclick = () => navigateToAntibiotic(antibiotic);
            list.appendChild(listItem);
        });

        classSection.appendChild(list);
        container.appendChild(classSection);
    }
}

// Function to dynamically set the bacteria name and load antibiotics based on URL parameter
function setBacteriaName() {
    const urlParams = new URLSearchParams(window.location.search);
    const bacteriaName = urlParams.get('name');
    
    if (bacteriaName) {
        document.getElementById('bacteria-name').textContent = bacteriaName;

        const bacteria = bacteriaData.find(b => b.name === bacteriaName);
        if (bacteria) {
            renderAntibioticsByClass(bacteria);
        }
    }
}

// Function to navigate to the antibiotic page
function navigateToAntibiotic(antibioticName) {
    window.location.href = `antibiotic.html?name=${encodeURIComponent(antibioticName)}`;
}

// Function to show Preferred Antibiotics
function showPreferredAntibiotics() {
    document.getElementById('preferred-antibiotics').classList.add('active');
    document.getElementById('all-antibiotics').classList.remove('active');
    document.getElementById('preferredTab').classList.add('active');
    document.getElementById('allTab').classList.remove('active');
}

// Function to show All Antibiotics
function showAllAntibiotics() {
    document.getElementById('all-antibiotics').classList.add('active');
    document.getElementById('preferred-antibiotics').classList.remove('active');
    document.getElementById('allTab').classList.add('active');
    document.getElementById('preferredTab').classList.remove('active');
}

// Call functions on page load
if (window.location.pathname.includes('bacteria.html')) {
    window.onload = setBacteriaName;
}
