# getTroopType_GimmickUID

Gets the troop type where the gimmick is belong to.

## Code Information

- **Name**: `getTroopType_GimmickUID`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d0 00`
- **Assembly Address in Memory** : `0x89259f0`

## Parameters

- `(int)gimmick_identifier` *(8 bytes)* : User defined any gimmick identifier, from [addGimmick](./addgimmick.md).
- `(int *)troop_type` *(8 bytes)* : Variable to *store* the troop type of the gimmick.

## Example

Here is one example in hex:

```25 16 d0 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
getTroopType_GimmickUID((int *)iVar1, (int *)iVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089259f0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x108);
  if ((iVar3 != 0) && (iVar3 = Get_Gimmick(iVar3,*puVar1), iVar3 != 0)) {
    *piVar2 = (int)*(char *)(iVar3 + 0x98);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

