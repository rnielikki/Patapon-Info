# enableCollisionConstGimmick

Sets a const gimmick collidable.

## Code Information

- **Name**: `enableCollisionConstGimmick`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c1 00`
- **Assembly Address in Memory** : `0x8923fe4`

## Parameters

- `(int)gate_id` *(8 bytes)* : Obtained from [getGateInfo](./getgateinfo.md) with `param_index` 0.

## Example

Here is one example in hex:

```25 16 c1 00 / 08 00 00 00 / 48 00 00 00```

Which is interpreted as:

```c
enableCollisionConstGimmick(((global)int *)giVar72)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923fe4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  FUN_089f0810(*(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x7e44,*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

