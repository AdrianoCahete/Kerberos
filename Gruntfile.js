module.exports = function(grunt) {
	
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// Project configuration.
		pkg: grunt.file.readJSON('package.json'),
		timestamp: grunt.template.today('dd-mm-yyyy_HH-MM-ss'),

		// Execute commands
		exec: {
			generate_stats: {
				cmd: 'parker example/ --format=json > results/data/StyleDefault-latest.json',
				stdout: true
			},
			
			generate_stats_to_history: {
				cmd: 'parker example/ --format=json > results/data/history/StyleDefault-<%= timestamp %>.json',
				stdout: false
			}
		},

        // Compile CSS
		sass: {
            options: {
                sourceMap: false
            },
            resultCss: {
                files: {
                    'results/css/style.css': 'template/scss/style.scss'
                }
            }
        },
		
		watch: {
			options: {
				dateFormat: function(time) {
					grunt.log.writeln('\nThe watch finished in ' + time + 'ms at ' + (new Date()).toString() + '\n-----------------------------\n');
					grunt.log.writeln('Waiting for more changes... \n');
				}
			},
			sass: {
				files: 'template/scss/*.scss',
				tasks: ['sass','notify:watch']
			}
		},
		
		// Notify 
		notify: {
			options: {
			  enabled: true,
			  max_jshint_notifications: 5,
			  success: true,
			  duration: 5
			},

			watch: {
			  options: {
				title: 'Task Complete',
				message: 'SASS finished with success'
			  }
			}
		},

        // Build Template
		bake: {
			build_Template: {
				options: {
					content: "results/data/StyleDefault-latest.json"
				},

				files: {
					"results/index.html": "template/templateIndex.html"
				}
			}
			//build_History: {
			//	options: {
			//		content: "results/data/StyleDefault-latest.json"
			//	},

			//	files: {
			//		"results/indexHistory.html": "template/templateIndex.html"
			//	}
			//}
		}

	});
    
    // Generate CSS
	//grunt.registerTask('scss', ['sass']);

	// Create Report
	grunt.registerTask('default', ['sass','exec','bake']);
	
	// Dev
	grunt.registerTask('dev', ['sass','exec','bake']);
};