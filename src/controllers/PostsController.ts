import Controller from 'app/Controller';
import GET from 'app/Http';

@Controller()
export default class PostsController {
  @GET('/')
  private index() {
    return {
      hello: 'world',
    };
  }
}
