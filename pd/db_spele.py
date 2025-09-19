import sqlite3
DB = 'spele.db'
conn = sqlite3.connect(DB)
cursor = conn.cursor()
dati = []
for i in range(4):
    print(f'\nIevadi {i+1}. ierakstu:')
    speletajs = input('Spēlētājs:')
    loma = input('Loma: ')
    punkti = int(input('Punkti: '))
    dati.append((speletajs, loma, punkti))
cursor.executemany('''
    INSERT INTO rezultati (speletajs, loma, punkti)
    VALUES (?, ?, ?)               
''', dati)
conn.commit()
conn.close()
print('Tika pievienoti 4 ieraksti.')