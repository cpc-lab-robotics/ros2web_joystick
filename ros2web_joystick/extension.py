from typing import Dict

from ros2web.api import Plugin
from ros2web.api import RouteTableDef, Request

from std_msgs.msg import String

routes = RouteTableDef()


class ROS2WebExtension(Plugin):

    def __init__(self, config: Dict) -> None:
        super().__init__(
            routes=routes
        )
        self.__config = config
        self.__publisher = None

    async def on_startup(self):
        self.__publisher = self.ros_node.create_publisher(String, 'topic', 10)

    async def on_shutdown(self):
        self.ros_node.destroy_publisher(self.__publisher)
    
    @routes.post('/event')
    async def event_handler(self, request: Request):
        payload = request.json_payload
        print(payload)
        
    @routes.get('/click')
    async def click_handler(self, request: Request):
        search_params = request.search_params
        print('click: ', search_params)