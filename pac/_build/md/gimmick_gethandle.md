# gimmick_getHandle

Gets handle with the given gimmick identifier.

## Code Information

- **Name**: `gimmick_getHandle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 01 00`
- **Assembly Address in Memory** : `0x8940e68`

## Parameters

- `(int)gimmick_identifier` *(8 bytes)* : Gimmick identifier from various place, e.g. [addGimmick](./addgimmick.md), [getGateInfo](./getgateinfo.md) or [registConstGimmick](./registconstgimmick.md). Seems like the ID from [setReqActorUniqueId](./setreqactoruniqueid.md) works too.
- `(int *)gimmick_handle` *(8 bytes)* : Varaible to *store* the gimmick handle.

## Example

Here is one example in hex:

```25 19 01 00 / 02 00 00 00 / f7 01 00 00 / 04 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
gimmick_getHandle((int)503, (int *)iVar10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08940e68(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Get_Gimmick(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x108),*puVar1);
  if (iVar3 == 0) {
    *piVar2 = -1;
  }
  else {
    *piVar2 = (int)*(short *)(iVar3 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

