const companyService = require('../../services/company.service');


const getCompany = async function (req, res) {
    let start = new Date();

    const companyList = await companyService.getCompany(req);
    return ReS(res, {
        companyList : companyList
    }, 201, start);
}

module.exports.getCompany = getCompany;