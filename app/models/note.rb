class Note < ApplicationRecord
  validates_presence_of :title
  validates :color, inclusion: { in: %w(yellow blue pink), message: "%{value} is invalid." }
  validates :body, :title, length: { maximum: 30 }
end
