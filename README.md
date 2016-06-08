# Kerberos
Greek name for Cerberos, guardian of Hades's gates
  
Track your style infos.

This tool use NodeJS, Parker and Grunt to get your css information and generate a nice report, using only html/css.


## How to use
You need have NodeJS installed before start.

Edit Gruntfile.js to get your css file:  
```generate_stats: {
    cmd: 'parker path/to/css/folder/ --format=json > results/data/StyleDefault-latest.json',
    stdout: false
},```

To generate to history, edit:    
```generate_stats_to_history: {
	cmd: 'parker path/to/css/folder/ --format=json > results/data/history/StyleDefault-<%= timestamp %>-.json',
	stdout: false
}```

Pointing to folder, Kerberos will get all files in this folder. You can point to file directly.

## Template
All output is customizable, using [Grunt Bake template engine](https://github.com/MathiasPaumgarten/grunt-bake).

## Results
Results will be written to `results` folder, overwriting all existent files (except `history` folder).


## TODO
- Build css using Grunt
- Update template to be Responsive
- Create a better Layout
- Change text to resource files
- Create a html for History
- Compare itens from actual to history

## License
MIT License - Created by Adriano Caheté