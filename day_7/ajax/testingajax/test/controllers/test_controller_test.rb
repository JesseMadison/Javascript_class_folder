require 'test_helper'

class TestControllerTest < ActionDispatch::IntegrationTest
  test "should get page" do
    get test_page_url
    assert_response :success
  end

end
