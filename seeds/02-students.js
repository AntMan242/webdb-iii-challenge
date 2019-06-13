
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Brady', cohort_id: 1},
        {name: 'Leonard', cohort_id: 2},
        {name: 'Durant', cohort_id: 3}
      ]);
    });
};
