module AuthorInfoHelper
  def author_info(page, key)
    data.authors.send("#{page.data.author}").send("#{key}")
  end
end