# setCapture

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setCapture`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 18 00`
- **Assembly Address in Memory** : `0x89b2d38`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 18 00 / 04 00 00 00 / 14 00 00 00 / 08 00 00 00 / 6e 01 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setCapture((int *)iVar20, ((global)int *)giVar366, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b2d38(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  uint uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Is_Valid_SquadHandle(param_1,*puVar1);
  if ((iVar4 != 0) &&
     (iVar5 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1), iVar5 != 0))
  {
    FUN_0887ddd0(iVar5,1);
    Gimmick::Gimmick_Set_Position(iVar5,*(undefined4 *)(iVar4 + 0x7c),*puVar3,0);
    uVar6 = *(uint *)(iVar5 + 0x120) & 0xffffffbe;
    *(uint *)(iVar5 + 0x120) = *(uint *)(iVar5 + 0x120) & 0xfffffffe;
    *(uint *)(iVar5 + 0x120) = uVar6;
    *(uint *)(iVar5 + 0x120) = uVar6 | 0x20;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

