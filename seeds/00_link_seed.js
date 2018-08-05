
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {id: 1, title: 'Knex Docs', description: 'Fully searchable documentation for Knex.js', url: 'https://knexjs.org/', stringarray: ['docs', 'database', 'query', 'schema', 'table', 'seed']},
        {id: 2, title: 'React Cheat Sheet', description: 'React code snippets with links to documentation', url: 'https://reactcheatsheet.com/', stringarray: ['react', 'methods', 'docs', 'lifecycle', 'props', 'children', 'virtual dom', 'component', 'state']},
        {id: 3, title: 'Swiss Graphic Design Ideas', description: 'Swiss style design influence from the 60s and how it has become an international style', url: 'https://www.smashingmagazine.com/2009/07/lessons-from-swiss-style-graphic-design/', stringarray: ['fonts', 'blog', 'article', 'grid', 'graphic art', 'design', 'style']}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE links_id_seq RESTART WITH 4;');
    })
};
