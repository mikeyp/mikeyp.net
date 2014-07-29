module OwnerInfoHelper
  def owner_info(key)
    owner = data.config.owner
    data.authors.send("#{owner}").send("#{key}")
  end
end