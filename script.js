// Bacteria and Antibiotic data
const bacteriaData = [

    {
        name: "Enterococcus Faecalis (VS)",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin G" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" }
        ],
        allAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Televancin", detailsPage: "antibiotic.html?name=Televancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Nitrofurantoin", detailsPage: "antibiotic.html?name=Nitrofurantoin"}
        ]
    },

    {
        name: "Enterococcus Faecium (VS)",
        preferredAntibiotics: [
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Nitrofurantoin", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"}

        ]
    },

    {
        name: "Enterococcus Faecalis (VRE)",
        preferredAntibiotics: [
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Nitrofurantoin", detailsPage: "antibiotic.html?name=Nitrofurantoin"},

        ]
    },

    {
        name: "Enterococcus Faecium (VRE)",
        preferredAntibiotics: [
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Nitrofurantoin", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"}

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
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"},
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics:[
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}
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
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"},
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"} 

        ],
        allAntibiotics:[
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}

        ]
    },

    {
        name: "Staphylococcus Epidermidis (MR)",
        preferredAntibiotics: [
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"} 
        ],
        allAntibiotics:[
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}
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
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"}

        ],
        allAntibiotics:[
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"},
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[ 
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"},
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"}
        ],
        allAntibiotics:[
            { name: "Pivmecillinam", detailsPage: "antibiotic.html?name=Pivmecillinam" },
            { name: "Nitrofurantoin", detailsPage: "antibiotic.html?name=Nitrofurantoin" },
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
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
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"},  
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" }
        ],
        allAntibiotics:[
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"}, 
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin"}, 


        ],
        allAntibiotics:[
            { name: "Pristinomycin", detailsPage: "antibiotic.html?name=Pristinomycin"},
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
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
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"}, 
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
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
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin"}

        ],
        allAntibiotics:[
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}

        ]
    },

    {
        name: "Listeria Monocytogenes",
        preferredAntibiotics: [
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
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
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
        ],
        allAntibiotics:[
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ]
    },

    {
        name: "Aeromonas sp.",
        preferredAntibiotics: [
            //none in sanford guide that have preferred coverage 
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"}, 
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
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

        ],
        allAntibiotics:[
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
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
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"},
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"},
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Pivmecillinam", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"},
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
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
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"},
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Pivmecillinam", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Plazomicin", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            
        ]
    },

    {
        name: "Escherichia Coli (KPC)",
        preferredAntibiotics: [
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},

        ],
        allAntibiotics:[
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Plazomicin", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 

        ]
    },

    {
        name: "Escherichia Coli (MBL)",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Plazomicin", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            
        ]
    },

    {
        name: "Klebsiella Pneumoniae (S)",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"},
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
        ],
        allAntibiotics:[
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"},
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Pivmecillinam", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Plazomicin", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Klebsiella sp. (KPC)",
        preferredAntibiotics: [
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
        ],
        allAntibiotics:[
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Plazomicin", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
        ]
    },

    {
        name: "Klebsiella sp. (MBL)",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Plazomicin", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
        ]
    },

    {
        name: "Klebsiella Aerogenes",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Pivmecillinam", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},

        ],
        allAntibiotics:[
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"},
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", detailsPage: "antibiotic.html?name=Cefaclor"},
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"},
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Fosfomycin (oral)", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Norfloxacin", detailsPage: "antibiotic.html?name=Norfloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
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
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Plazomicin", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"},
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
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
        ],
        allAntibiotics:[
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
        ]
    },

    {
        name: "Bordetella Pertussis",
        preferredAntibiotics: [
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"}
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"}
        ]
    },

    {
        name: "Borrelia Burgdoferi",
        preferredAntibiotics: [
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 

        ],
        allAntibiotics:[
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"}, 
        ]
    },

    {
        name: "Brucella sp.",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Campylobacter Jejuni",
        preferredAntibiotics: [ 
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
        ],
        allAntibiotics:[
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Amikacin", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"},
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
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
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"},
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
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
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"},
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
        ]
    },

    {
        name: "Ehrlichia, Anaplas",
        preferredAntibiotics: [
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 

        ],
        allAntibiotics:[
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
        ]
    },

    {
        name: "Eikenella sp.",
        preferredAntibiotics: [

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
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
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},

        ]
    },

    {
        name: "Haemophilus Ducreyi",
        preferredAntibiotics: [
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
        ],
        allAntibiotics:[
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
        ]
    },

    {
        name: "Haemophilus Influenzae",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},

        ],
        allAntibiotics:[
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"},
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"}, 
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
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"}, 
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
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
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 

        ]
    },

    {
        name: "Legionella sp.",
        preferredAntibiotics: [
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
        ]
    },

    {
        name: "Leptospira sp.",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"}, 
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
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"},
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Cefditoren", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"}, 
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
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"}, 
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
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefdinir", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"},
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"},
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"}, 
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
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 

        ]
    },

    {
        name: "Vibrio Cholera",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Vibrio Parahemolyticus",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Vibrio Vulnificus",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},
        ]
    },

    {
        name: "Yersinia Pestis",
        preferredAntibiotics: [            
            { name: "Gentamicin", detailsPage: "antibiotic.html?name=Gentamicin"},
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"},

        ]
    },

    {
        name: "Acinetobacter Baumannii",
        preferredAntibiotics: [            

        ],
        allAntibiotics:[
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},

        ]
    },

    {
        name: "Burkholderia cepacia complex",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
        ]
    },
    {
        name: "Pseudomonas Aeruginosa",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},

        ],
        allAntibiotics:[
            { name: "Tobramycin", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Stenotrophomonas Maltophilia",
        preferredAntibiotics: [
            { name: "Trimethoprim-Sulfamethoxazole", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Cefiderocol", detailsPage: "antibiotic.html?name=Cefiderocol"},
        ]
    },

    {
        name: "Chlamydia Trachomatis",
        preferredAntibiotics: [
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
        ],
        allAntibiotics:[
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Erythomycin", detailsPage: "antibiotic.html?name=Erythomycin"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"},
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Chlamydophila sp.",
        preferredAntibiotics: [
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Telithromycin", detailsPage: "antibiotic.html?name=Telithromycin"},
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythomycin", detailsPage: "antibiotic.html?name=Erythomycin"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ]
    },

    {
        name: "Mycoplasma Pneumoniae",
        preferredAntibiotics: [
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin", detailsPage: "antibiotic.html?name=Levofloxacin"},
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 

        ],
        allAntibiotics:[
            { name: "Lefamulin", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", detailsPage: "antibiotic.html?name=Gemifloxacin"},
            { name: "Prulifloxacin", detailsPage: "antibiotic.html?name=Prulifloxacin"},
            { name: "Ofloxacin", detailsPage: "antibiotic.html?name=Ofloxacin"},
            { name: "Ciprofloxacin", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

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
            { name: "Metronidazole", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 

        ]
    },

    {
        name: "Fusobacterium Necrophorum",
        preferredAntibiotics: [
            { name: "Metronidazole", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
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
            { name: "Metronidazole", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Moxifloxacin", detailsPage: "antibiotic.html?name=Moxifloxacin"},
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
            { name: "Erythomycin", detailsPage: "antibiotic.html?name=Erythomycin"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
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
            { name: "Metronidazole", detailsPage: "antibiotic.html?name=Metronidazole"}, 
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Clarithromycin", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythomycin", detailsPage: "antibiotic.html?name=Erythomycin"}, 
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"},
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"},
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"},
            { name: "Delafloxacin", detailsPage: "antibiotic.html?name=Delafloxacin"}, 
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
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"}, 
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
            { name: "Fosfomycin (IV)", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Chloramphenicol", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Linezolid", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Oritavancin", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Telavancin", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", detailsPage: "antibiotic.html?name=Teicoplanin" },
            { name: "Vancomycin", detailsPage: "antibiotic.html?name=Vancomycin" },
            { name: "Daptomycin", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Tetracycline", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Minocycline", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", detailsPage: "antibiotic.html?name=Doxycycline"},
            { name: "Clindamycin", detailsPage: "antibiotic.html?name=Clindamycin"},
            { name: "Cefpodoxime", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cafaclor", detailsPage: "antibiotic.html?name=Cafaclor"}, 
            { name: "Cephalexin", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", detailsPage: "antibiotic.html?name=Cefadroxil"},
            { name: "Ceftolazone-Tazobactam", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", detailsPage: "antibiotic.html?name=Ceftaroline"},
            { name: "Ceftazidime-Avibactam", detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", detailsPage: "antibiotic.html?name=Cefepime"},
            { name: "Ceftazidime", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", detailsPage: "antibiotic.html?name=Ceftriaxone"},
            { name: "Cefoperazone", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", detailsPage: "antibiotic.html?name=Cefazolin"}, 
            { name: "Gatifloxacin", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Levofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Levofloxacin"}, 
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
    { name: "Doxycycline", class: "Tetracyclines"},
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
