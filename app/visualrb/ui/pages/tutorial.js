app.visualrb.ui.pages.tutorial = ((page) => {
  const content = `
    <h1>getting a heap dump</h1>
    <p>
      install <b>rbtrace</b><br>
      <code>> gem install rbtrace </code>
      <br>
      or add directly to <b>Gemfile</b><br> 
      <code>gem "rbtrace"</code>
      <br>
      create this ruby script<br>
      <code>
        > vim /tmp/dump.rb<br>
        Thread.new {<br>
        &nbsp;&nbsp;GC.start<br>
        &nbsp;&nbsp;require "objspace"<br>
        &nbsp;&nbsp;io=File.open("/tmp/ruby-heap.dump", "w")<br>
        &nbsp;&nbsp;ObjectSpace.dump_all(output: io)<br>
        &nbsp;&nbsp;io.close<br>
        }        
      </code>
      <br>
      create the heap dump<br>
      <code>
        pid = 1234<br>
        rbtrace -p $pid -e 'load("/tmp/dump.rb")'
      </code>
      <br>
      or on Rails<br>
      <code>
        pid = 1234<br>
        bundle exec rbtrace -p $pid -e 'load("/tmp/dump.rb")'
      </code
      <br>
      finally drag the heap dump into the browser<br>
      done
    </p>
  `

  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('training', 'getting started', content)
  }

  return page
})({})
