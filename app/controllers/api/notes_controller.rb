class Api::NotesController < ApplicationController
  before_action :set_note, except: [:index]

  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :color)
  end

  def set_note
  end
end
