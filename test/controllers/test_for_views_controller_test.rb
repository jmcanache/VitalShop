require 'test_helper'

class TestForViewsControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get headers" do
    get :headers
    assert_response :success
  end

  test "should get login_register" do
    get :login_register
    assert_response :success
  end

  test "should get mostrador_productos" do
    get :mostrador_productos
    assert_response :success
  end

  test "should get configuracion_perfil" do
    get :configuracion_perfil
    assert_response :success
  end

end
