import request.request as req

def get_critiques_by_attraction(id_attraction):
  if not id_attraction:
    return False
  
  json = req.select_from_db("SELECT * FROM critique WHERE attraction_id = ?", (id_attraction, ))

  return json

def get_critiques():
  json = req.select_from_db("SELECT * FROM critique")
  return json

def add_critique(data):
    print(data, flush=True)
    if (not "critique" in data or data["critique"] == ""):
        return False
    
    if (not "note" in data or data["note"] == ""):
        return False

    if (not "attraction_id" in data or data["attraction_id"] is None):
        return False
    
    if (not "anonyme" in data):
        data["anonyme"] = False

    if (data["anonyme"] == False):
       if (not "nom" in data or data["nom"] == "" or not "prenom" in data or data["prenom"] == ""):
        return False

    if ("critique_id" in data and data["critique_id"]):
      requete = f"UPDATE critique SET attraction_id='{data['attraction_id']}', critique='{data['critique']}', note='{data['note']}', nom={data['nom']}, prenom={data['prenom']}, anonyme={data['anonyme']} WHERE critique_id = {data['critique_id']}"
      req.insert_in_db(requete)
      id = data['critique_id']
    else:
      requete = "INSERT INTO critique (attraction_id, critique, note, nom, prenom, anonyme) VALUES (?, ?, ?, ?, ?, ?);"
      id = req.insert_in_db(requete, (data["attraction_id"], data["critique"], data["note"], data["nom"], data["prenom"], data["anonyme"]))

    return id