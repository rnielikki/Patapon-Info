# cmd_rand

Returns random value between zero and certain value.

## Code Information

- **Name**: `cmd_rand`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 11 00`
- **Assembly Address in Memory** : `0x88385e0`

## Parameters

`cmd_rand((uint)maxExclusive, (uint *)destination)`

- `(uint)maxExclusive` *(8 bytes)* : Can be variable or immediate value. This value is for *reading*. Note that it's **Exclusive**.
- `(uint *)destination` *(8 bytes)* : Variable to store value. This value will be uesd for *writing only* and **will be modified**.

This performs `destination = Random() % maxExclusive`.

If you want to make it inclusive, add +1 to the `maxExclusive` with [cmd_inc](./cmd_inc.md).

## Remarks

If you want to set min-max, you can follow this:

- [cmd_mov](./cmd_mov.md)(nVar, max)
- [cmd_sub](./cmd_sub.md)(nVar, min)
- [cmd_inc](./cmd_inc.md)(nVar)
- **cmd_rand**(nVar)
- [cmd_add](./cmd_add.md)(nVar, min)

Which means:
```c
nVar = max;
nVar -= min;
nVar++;
Random(nVar);
nVar += min;
```

`nVar` here is any variable. In this case, `max` must be bigger than `min`.


## Example

Here is one example in hex:

```25 00 11 00 / 02 00 00 00 / 03 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
cmd_rand((int)3, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_088385e0(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  uint *puVar2;
  uint uVar3;
  
                    // (max value+1)
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
                    // address to store
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  if ((int)*puVar1 < 1) {
    *puVar2 = 0;
  }
  else {
                    // certain rng seeds stored here
    uVar3 = Util::Random::Get_Rand_Value(0x8aab350);
    if (*puVar1 == 0) {
      trap(7);
    }
    *puVar2 = uVar3 % *puVar1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

