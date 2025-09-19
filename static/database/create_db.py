import sqlite3
DB = 'dati.db'
#savienojuuma izveeide ar db
conn = sqlite3.connect(DB)
#kursora izveide (gruzchiks)
cursor = conn.cursor()
#pieprasījums, kas veido datu bāzi
cursor.execute('''
    CREATE TABLE IF NOT EXISTS rezultati (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               vards TEXT NOT NULL,
               uzvards TEXT NOT NULL,
               rezultats INTEGER NOT NULL
               )
''')
#SAGLABĀ IZMAIŅAS
conn.commit()
conn.close()
print('Tabula Rezultati izveidota')