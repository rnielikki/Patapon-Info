# obstacleClear

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `obstacleClear`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 34 00`
- **Assembly Address in Memory** : `0x89b4254`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 34 00 / 04 00 00 00 / 14 00 00 00```

Which is interpreted as:

```c
obstacleClear((int *)iVar20)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b4254(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar2 != 0) {
    *(undefined4 *)(iVar2 + 0x570) = 0;
    *(undefined4 *)(iVar2 + 0x574) = 0;
    *(undefined4 *)(iVar2 + 0x578) = 0;
    *(undefined *)(iVar2 + 0x57c) = 1;
    *(undefined *)(iVar2 + 0x57d) = 0;
    *(undefined *)(iVar2 + 0x57e) = 0;
    *(undefined *)(iVar2 + 0x57f) = 1;
    *(undefined *)(iVar2 + 0x580) = 0;
    *(undefined *)(iVar2 + 0x581) = 0;
    *(undefined *)(iVar2 + 0x582) = 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

