import { Controller } from './api/base';
import { FunctionController, FunctionMongoRepository, FunctionService } from './api/function';
import { MemberController, MemberMongoRepository, MemberService } from './api/member';
import { TagController, TagMongoRepository, TagService } from './api/tag';
import App from './server/app';

let repository: any = {
    functionRepository: new FunctionMongoRepository(),
    tagRepository: new TagMongoRepository(),
    memberRepository: new MemberMongoRepository()
};

let services: any = {
    functionService: new FunctionService(repository.functionRepository),
    tagService: new TagService(repository.tagRepository)
};

services.memberService = new MemberService({
    functionService: services.functionService,
    tagService: services.tagService,
    memberRepository: repository.memberRepository
});

const controllers: Array<Controller> = [
    new FunctionController({ functionService: services.functionService }),
    new TagController({ tagService: services.tagService }),
    new MemberController({ memberService: services.memberService })
]

const app = new App(controllers);

if (process.env.NODE_ENV !== 'test') {

    const port = Number(process.env.PORT) || 8080

    app.listen(port);
}

export default app.app;