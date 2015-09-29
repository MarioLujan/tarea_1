/* Mario Alberto Lujan Llanas 271321 */
/* 2) El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importo 
correctamente la colección con los siguientes comandos en la terminal de mongo: */
> use students;
switched to db students
/*cuantos registros arrojo el comando count?*/
> db.grades.count()
800


/* 3) Encuentra todas las calificaciones del estudiante con el id numero 4 */
> db.grades.find({"student_id":4});
{ "_id" : ObjectId("50906d7fa3c412bb040eb587"), "student_id" : 4, "type" : "exam", "score" : 87.89071881934647 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb588"), "student_id" : 4, "type" : "quiz", "score" : 27.29006335059361 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb589"), "student_id" : 4, "type" : "homework", "score" : 5.244452510818443 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb58a"), "student_id" : 4, "type" : "homework", "score" : 28.656451042441 }

/* 4) ¿Cuantos registros hay de tipo exam? */
> db.grades.count({"type":"exam"})
200

/* 5) ¿Cuantos registros hay de tipo homework? */
> db.grades.count({"type":"homework"})
400

/* 6) ¿Cuantos registros hay de tipo quiz? */
> db.grades.count({"type":"quiz"})
200

/* 7) Elimina todas las calificaciones del estudiante con el id numero 3 */
> db.grades.find({"student_id":3})
{ "_id" : ObjectId("50906d7fa3c412bb040eb583"), "student_id" : 3, "type" : "exam", "score" : 92.6244233936537 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb584"), "student_id" : 3, "type" : "quiz", "score" : 82.59760859306996 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb585"), "student_id" : 3, "type" : "homework", "score" : 50.81577033538815 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb586"), "student_id" : 3, "type" : "homework", "score" : 92.71871597581605 }

> db.grades.remove({"student_id":3})

> db.grades.find({"student_id":3})
>

/* 8) ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ? */
> db.grades.find({"score": 75.29561445722392})
{ "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }

/* 9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 */
> db.grades.find({'_id': ObjectId("50906d7fa3c412bb040eb591" ) })
{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 81.23822046161325 }
/* Modificado */
> db.grades.update({'_id': ObjectId("50906d7fa3c412bb040eb591")}, {$set:{"score":100}} );
> db.grades.find({'_id': ObjectId("50906d7fa3c412bb040eb591" ) })
{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 100 }

/* 10) A que estudiante pertenece esta calificación */
> db.grades.find({"score": 100})
{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 100 }