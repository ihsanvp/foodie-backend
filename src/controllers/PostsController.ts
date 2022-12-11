import Controller from 'app/Controller';
import GET, { Context } from 'app/Http';

@Controller()
export default class PostsController {
  @GET('/')
  public async index(ctx: Context) {}
}
